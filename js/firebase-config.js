// ── BlendBar Firebase Configuration ──────────────────────────────
// Using Firebase Compat SDK (CDN-friendly, no bundler needed)

const firebaseConfig = {
  apiKey: "AIzaSyAI2QHEmH_tZ_Ove6l4rhjVb_jEM5bGKr0",
  authDomain: "blendbar-shop-v1.firebaseapp.com",
  projectId: "blendbar-shop-v1",
  storageBucket: "blendbar-shop-v1.firebasestorage.app",
  messagingSenderId: "720121697192",
  appId: "1:720121697192:web:454d76fefaf8b3897b039d",
  measurementId: "G-752RM9QTS1"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Enable offline support
db.enablePersistence({ synchronizeTabs: true }).catch(() => {});

// ── FirebaseDB Helper ─────────────────────────────────────────────
const FirebaseDB = {

  // Save new order
  saveOrder: async (order) => {
    return db.collection('orders').doc(order.id).set({
      ...order,
      serverTime: firebase.firestore.FieldValue.serverTimestamp(),
    });
  },

  // Update order status
  updateStatus: async (orderId, status) => {
    return db.collection('orders').doc(orderId).update({
      status,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  },

  // Delete order
  deleteOrder: async (orderId) => {
    return db.collection('orders').doc(orderId).delete();
  },

  // Listen to a single order (real-time)
  onOrder: (orderId, callback) => {
    return db.collection('orders').doc(orderId)
      .onSnapshot(doc => { if (doc.exists) callback(doc.data()); });
  },

  // Listen to all orders (real-time), newest first
  onAllOrders: (callback) => {
    return db.collection('orders')
      .orderBy('createdAt', 'desc')
      .limit(100)
      .onSnapshot(snap => {
        callback(snap.docs.map(d => d.data()));
      }, err => {
        console.warn('Firestore error, falling back to localStorage:', err);
        try {
          callback(JSON.parse(localStorage.getItem('admin_orders') || '[]'));
        } catch(e) { callback([]); }
      });
  },

  // One-time fetch all orders
  getOrders: async () => {
    const snap = await db.collection('orders').orderBy('createdAt', 'desc').limit(100).get();
    return snap.docs.map(d => d.data());
  }
};
