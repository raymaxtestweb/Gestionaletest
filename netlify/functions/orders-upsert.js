import { getStore } from "@netlify/blobs";
 
export default async (req) => {
  try {
    const payload = await req.json();
    if (!payload.orderId) throw new Error("orderId mancante");
 
    const store = getStore("raymax-calendar");
    const orders = (await store.get("orders", { type: "json" })) || [];
 
    const idx = orders.findIndex(o => o.orderId === payload.orderId);
    if (idx >= 0) {
      orders[idx] = payload;
    } else {
      orders.push(payload);
    }
 
    await store.set("orders", orders);
    return new Response(JSON.stringify({ ok: true }), {
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
 
