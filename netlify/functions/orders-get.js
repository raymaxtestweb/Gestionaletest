import { getStore } from "@netlify/blobs";

function parseOrders(raw) {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  if (typeof raw === 'string') return JSON.parse(raw);
  return [];
}

export default async () => {
  try {
    const store = getStore("raymax-calendar");
    const raw = await store.get("orders", { type: "json" }).catch(() => null);
    const orders = parseOrders(raw);
    return new Response(JSON.stringify({ ok: true, orders }), {
      status: 200, headers: { "content-type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, error: error.message }), {
      status: 500, headers: { "content-type": "application/json" }
    });
  }
};
