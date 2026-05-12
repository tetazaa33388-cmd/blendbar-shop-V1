// ── BlendBar Firebase Configuration ──────────────────────────────
// Using Firebase Realtime Database (FREE Spark plan, no billing needed)

const firebaseConfig = {
  apiKey: "AIzaSyAI2QHEmH_tZ_Ove6l4rhjVb_jEM5bGKr0",
  authDomain: "blendbar-shop-v1.firebaseapp.com",
  // ↓ Realtime Database URL (copy from Firebase Console → Realtime Database)
  databaseURL: "https://blendbar-shop-v1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blendbar-shop-v1",
  storageBucket: "blendbar-shop-v1.firebasestorage.app",
  messagingSenderId: "720121697192",
  appId: "1:720121697192:web:454d76fefaf8b3897b039d",
};

firebase.initializeApp(firebaseConfig);
const rtdb = firebase.database();

// ── FirebaseDB Helper (Realtime Database) ────────────────────────
const FirebaseDB = {

  // Save new order
  saveOrder: async (order) => {
    return rtdb.ref('orders/' + order.id).set({
      ...order,
      serverTime: firebase.database.ServerValue.TIMESTAMP,
    });
  },

  // Update order status
  updateStatus: async (orderId, status) => {
    return rtdb.ref('orders/' + orderId).update({
      status,
      updatedAt: firebase.database.ServerValue.TIMESTAMP,
    });
  },

  // Delete order
  deleteOrder: async (orderId) => {
    return rtdb.ref('orders/' + orderId).remove();
  },

  // Listen to a single order (real-time)
  onOrder: (orderId, callback) => {
    const ref = rtdb.ref('orders/' + orderId);
    ref.on('value', snap => { if (snap.exists()) callback(snap.val()); });
    return () => ref.off();
  },

  // Listen to all orders (real-time), newest first
  onAllOrders: (callback) => {
    const ref = rtdb.ref('orders').limitToLast(100);
    ref.on('value', snap => {
      const orders = [];
      snap.forEach(child => orders.unshift(child.val()));
      callback(orders);
    }, err => {
      console.warn('RTDB error:', err);
      try { callback(JSON.parse(localStorage.getItem('admin_orders') || '[]')); } catch(e) { callback([]); }
    });
    return () => ref.off();
  },

  // One-time fetch
  getOrders: async () => {
    const snap = await rtdb.ref('orders').limitToLast(100).once('value');
    const orders = [];
    snap.forEach(child => orders.unshift(child.val()));
    return orders;
  }
};
