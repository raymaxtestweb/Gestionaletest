import { getStore } from "@netlify/blobs";

function parseOrders(raw) {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  if (typeof raw === 'string') return JSON.parse(raw);
  return [];
}

export default async (req) => {
  try {
    const { orderId } = await req.json();
    if (!orderId) throw new Error("orderId mancante");

    const store = getStore("raymax-calendar");
    const raw = await store.get("orders", { type: "json" }).catch(() => null);
    let orders = parseOrders(raw);
    orders = orders.filter(o => o.orderId !== orderId);

    await store.set("orders", JSON.stringify(orders));
    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { "content-type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, error: error.message }), {
      status: 500, headers: { "content-type": "application/json" }
    });
  }
};
