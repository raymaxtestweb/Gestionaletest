// netlify/functions/orders-delete.js
const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  try {
    const { orderId } = JSON.parse(event.body || '{}');
    if (!orderId) throw new Error('orderId mancante');

    const store = getStore('studio-data');
    const raw = await store.get('orders');
    let orders = raw ? JSON.parse(raw) : [];

    orders = orders.filter(o => o.orderId !== orderId);

    await store.set('orders', JSON.stringify(orders));
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true })
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: e.message })
    };
  }
};
