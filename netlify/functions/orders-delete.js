import { getStore } from "@netlify/blobs";
 
export default async (req) => {
  try {
    const { orderId } = await req.json();
    if (!orderId) throw new Error("orderId mancante");
 
    const store = getStore("raymax-calendar");
    let orders = (await store.get("orders", { type: "json" })) || [];
    orders = orders.filter(o => o.orderId !== orderId);
 
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
