import { getStore } from "@netlify/blobs";
 
export default async () => {
  try {
    const store = getStore("raymax-calendar");
    const orders = (await store.get("orders", { type: "json" })) || [];
    return new Response(JSON.stringify({ ok: true, orders }), {
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
 
