// netlify/functions/orders-get.js
const { getStore } = require('@netlify/blobs');

exports.handler = async () => {
  try {
    const store = getStore('studio-data');
    const raw = await store.get('orders');
    const orders = raw ? JSON.parse(raw) : [];
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true, orders })
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: e.message })
    };
  }
};
