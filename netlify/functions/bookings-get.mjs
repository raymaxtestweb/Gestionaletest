import { getStore } from "@netlify/blobs";

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

export default async () => {
  try {
    const store = getStore("raymax-calendar");
    const raw = (await store.get("bookings", { type: "json" })) || {};
    const bookings = normalizeBookings(raw);
    return new Response(JSON.stringify({ ok: true, bookings }), {
      status: 200,
      headers: { "content-type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, error: error.message }), {
      status: 500,
      headers: { "content-type": "application/json" }
    });
  }
};
