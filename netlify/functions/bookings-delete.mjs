import { getStore } from "@netlify/blobs";

const ALLOWED_SLOTS = ["MATTINA", "POMERIGGIO", "SERALE"];

function normalizeBookings(raw) {
  const normalized = {};
  for (const [date, value] of Object.entries(raw || {})) {
    if (!value || typeof value !== 'object') continue;
    const looksLikeLegacy = 'note' in value || 'occupied' in value || 'source' in value;
    if (looksLikeLegacy) {
      normalized[date] = { SERALE: value };
    } else {
      normalized[date] = {
        MATTINA: value.MATTINA || null,
        POMERIGGIO: value.POMERIGGIO || null,
        SERALE: value.SERALE || null
      };
    }
  }
  return normalized;
}

export default async (req) => {
  try {
    if (req.method !== "POST") return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), { status: 405, headers: { "content-type": "application/json" } });
    const body = await req.json();
    const date = body?.date;
    const slot = String(body?.slot || "").toUpperCase();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date || "")) return new Response(JSON.stringify({ ok: false, error: "Data non valida" }), { status: 400, headers: { "content-type": "application/json" } });
    if (!ALLOWED_SLOTS.includes(slot)) return new Response(JSON.stringify({ ok: false, error: "Fascia non valida" }), { status: 400, headers: { "content-type": "application/json" } });
    const store = getStore("raymax-calendar");
    const bookings = normalizeBookings((await store.get("bookings", { type: "json" })) || {});
    const current = bookings[date] || { MATTINA: null, POMERIGGIO: null, SERALE: null };
    current[slot] = null;
    if (!current.MATTINA && !current.POMERIGGIO && !current.SERALE) delete bookings[date];
    else bookings[date] = current;
    await store.setJSON("bookings", bookings);
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "content-type": "application/json" } });
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, error: error.message }), { status: 500, headers: { "content-type": "application/json" } });
  }
};
