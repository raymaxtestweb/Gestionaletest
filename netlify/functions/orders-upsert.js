// netlify/functions/orders-upsert.js
const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  try {
    const payload = JSON.parse(event.body || '{}');
    if (!payload.orderId) throw new Error('orderId mancante');

    const store = getStore('studio-data');
    const raw = await store.get('orders');
    let orders = raw ? JSON.parse(raw) : [];

    const idx = orders.findIndex(o => o.orderId === payload.orderId);
    if (idx >= 0) {
      orders[idx] = payload; // aggiorna
    } else {
      orders.push(payload);  // inserisce
    }

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
