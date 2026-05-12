// ── Menu Data ──────────────────────────────────────────────────────
const MENU_DATA = [
  // Fruit Smoothie
  { id: 1, name: 'Mango Magic', category: 'fruit', price: 89, emoji: '🥭', tags: ['bestseller'], desc: 'Tropical mango blended with coconut milk & a splash of lime' },
  { id: 2, name: 'Strawberry Blast', category: 'fruit', price: 85, emoji: '🍓', tags: ['popular'], desc: 'Fresh strawberries with banana & almond milk' },
  { id: 3, name: 'Mixed Berry', category: 'fruit', price: 95, emoji: '🫐', tags: [], desc: 'Blueberry, raspberry & blackberry medley' },
  { id: 4, name: 'Watermelon Fresh', category: 'fruit', price: 79, emoji: '🍉', tags: ['new'], desc: 'Refreshing watermelon with mint & lemon' },
  { id: 5, name: 'Pineapple Paradise', category: 'fruit', price: 85, emoji: '🍍', tags: [], desc: 'Sweet pineapple with coconut & turmeric' },
  { id: 6, name: 'Passion Twist', category: 'fruit', price: 90, emoji: '🌺', tags: ['new'], desc: 'Passion fruit with orange & ginger zing' },

  // Yogurt
  { id: 7, name: 'Strawberry Yogurt', category: 'yogurt', price: 95, emoji: '🍓', tags: ['bestseller'], desc: 'Greek yogurt with fresh strawberry & honey' },
  { id: 8, name: 'Blueberry Yogurt', category: 'yogurt', price: 99, emoji: '🫐', tags: ['popular'], desc: 'Creamy yogurt with blueberry compote & granola' },
  { id: 9, name: 'Honey Greek', category: 'yogurt', price: 89, emoji: '🍯', tags: [], desc: 'Pure Greek yogurt with wild honey & walnuts' },
  { id: 10, name: 'Mango Lassi', category: 'yogurt', price: 92, emoji: '🥭', tags: ['popular'], desc: 'Indian-inspired mango yogurt with cardamom' },

  // Protein
  { id: 11, name: 'Chocolate Protein', category: 'protein', price: 119, emoji: '🍫', tags: ['bestseller'], desc: 'Whey protein with cacao, banana & oat milk' },
  { id: 12, name: 'Banana Protein', category: 'protein', price: 109, emoji: '🍌', tags: [], desc: 'Banana, peanut butter & vanilla protein' },
  { id: 13, name: 'Vanilla Protein', category: 'protein', price: 115, emoji: '🌿', tags: ['popular'], desc: 'Clean vanilla protein with almond milk & chia' },
  { id: 14, name: 'PB Power', category: 'protein', price: 125, emoji: '💪', tags: ['new'], desc: 'Peanut butter, cacao & double protein shot' },

  // Coffee
  { id: 15, name: 'Cold Brew Blend', category: 'coffee', price: 99, emoji: '☕', tags: ['bestseller'], desc: 'Cold brew espresso with oat milk & dates' },
  { id: 16, name: 'Mocha Smoothie', category: 'coffee', price: 105, emoji: '🍫', tags: ['popular'], desc: 'Espresso, dark chocolate & banana' },
  { id: 17, name: 'Caramel Coffee', category: 'coffee', price: 109, emoji: '🍮', tags: [], desc: 'Salted caramel latte smoothie style' },

  // Soda
  { id: 18, name: 'Lemon Soda', category: 'soda', price: 65, emoji: '🍋', tags: [], desc: 'Fresh lemon with sparkling water & basil' },
  { id: 19, name: 'Mojito Soda', category: 'soda', price: 69, emoji: '🌿', tags: ['popular'], desc: 'Mint, lime & sparkling water mocktail' },
  { id: 20, name: 'Passion Soda', category: 'soda', price: 72, emoji: '🌺', tags: ['new'], desc: 'Passion fruit & butterfly pea flower soda' },
];

const CATEGORIES = [
  { id: 'all', label: 'All', emoji: '✨' },
  { id: 'fruit', label: 'Fruit', emoji: '🍓' },
  { id: 'yogurt', label: 'Yogurt', emoji: '🥛' },
  { id: 'protein', label: 'Protein', emoji: '💪' },
  { id: 'coffee', label: 'Coffee', emoji: '☕' },
  { id: 'soda', label: 'Soda', emoji: '🫧' },
];

const SWEETNESS_OPTIONS = [
  { value: 0, label: '0%' },
  { value: 25, label: '25%' },
  { value: 50, label: '50%' },
  { value: 75, label: '75%' },
  { value: 100, label: '100%' },
];

const ICE_OPTIONS = [
  { value: 'none', label: 'ไม่ใส่' },
  { value: 'less', label: 'น้อย' },
  { value: 'normal', label: 'ปกติ' },
  { value: 'extra', label: 'เยอะ' },
];

const SIZE_OPTIONS = [
  { value: 'S', label: 'S', priceAdd: -10 },
  { value: 'M', label: 'M', priceAdd: 0 },
  { value: 'L', label: 'L', priceAdd: 20 },
];

const MILK_OPTIONS = [
  { value: 'regular', label: 'นมสด', priceAdd: 0 },
  { value: 'almond', label: 'Almond Milk', priceAdd: 15 },
  { value: 'oat', label: 'Oat Milk', priceAdd: 15 },
  { value: 'soy', label: 'Soy Milk', priceAdd: 10 },
  { value: 'none', label: 'ไม่ใส่นม', priceAdd: 0 },
];

const TOPPINGS = [
  { id: 't1', label: 'Chia Seeds', emoji: '🌱', price: 10 },
  { id: 't2', label: 'Granola', emoji: '🌾', price: 15 },
  { id: 't3', label: 'Coconut Flakes', emoji: '🥥', price: 10 },
  { id: 't4', label: 'Honey Drizzle', emoji: '🍯', price: 15 },
  { id: 't5', label: 'Cacao Nibs', emoji: '🍫', price: 12 },
  { id: 't6', label: 'Whip Cream', emoji: '🍦', price: 15 },
];

const EXTRA_OPTIONS = [
  { id: 'e1', label: 'Protein Shot', emoji: '💪', price: 25 },
  { id: 'e2', label: 'Coffee Shot', emoji: '☕', price: 20 },
  { id: 'e3', label: 'Collagen', emoji: '✨', price: 30 },
];

const PROMO_BANNERS = [
  { emoji: '🎉', title: 'Buy 2 Get 1 Free!', desc: 'ซื้อ 2 แก้ว รับฟรี 1 แก้ว ทุกวันจันทร์', bg: 'linear-gradient(135deg,#a3e635,#84cc16)' },
  { emoji: '⚡', title: 'Happy Hour 14:00–16:00', desc: 'ลดทันที 20% ทุกเมนู Fruit Smoothie', bg: 'linear-gradient(135deg,#fb923c,#ea580c)' },
  { emoji: '🎁', title: 'สมาชิกใหม่รับคูปอง 50฿', desc: 'สมัครสมาชิกวันนี้รับส่วนลดทันที', bg: 'linear-gradient(135deg,#f472b6,#db2777)' },
];

// ── Cart Store (localStorage) ───────────────────────────────────────
const Store = {
  _key: 'smoothie_cart',
  _orderKey: 'smoothie_order',
  _tableKey: 'smoothie_table',

  getCart() {
    try { return JSON.parse(localStorage.getItem(this._key) || '[]'); } catch { return []; }
  },
  saveCart(cart) { localStorage.setItem(this._key, JSON.stringify(cart)); },
  clearCart() { localStorage.removeItem(this._key); },

  addItem(item) {
    const cart = this.getCart();
    const existing = cart.find(i => i.cartId === item.cartId);
    if (existing) { existing.qty += item.qty; }
    else { cart.push({ ...item, cartId: item.cartId || Date.now().toString() }); }
    this.saveCart(cart);
    this.dispatchUpdate();
  },

  removeItem(cartId) {
    const cart = this.getCart().filter(i => i.cartId !== cartId);
    this.saveCart(cart);
    this.dispatchUpdate();
  },

  updateQty(cartId, qty) {
    const cart = this.getCart();
    const item = cart.find(i => i.cartId === cartId);
    if (item) { item.qty = qty; if (qty <= 0) return this.removeItem(cartId); }
    this.saveCart(cart);
    this.dispatchUpdate();
  },

  getTotal() {
    return this.getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  getCount() {
    return this.getCart().reduce((sum, i) => sum + i.qty, 0);
  },

  setTable(tableId) { localStorage.setItem(this._tableKey, tableId); },
  getTable() { return localStorage.getItem(this._tableKey) || 'T1'; },

  setOrder(order) { localStorage.setItem(this._orderKey, JSON.stringify(order)); },
  getOrder() {
    try { return JSON.parse(localStorage.getItem(this._orderKey) || 'null'); } catch { return null; }
  },

  dispatchUpdate() {
    window.dispatchEvent(new CustomEvent('cartUpdate'));
  }
};

// ── Utilities ──────────────────────────────────────────────────────
const Utils = {
  formatPrice(n) { return `฿${n.toLocaleString()}`; },

  getParam(key) {
    return new URLSearchParams(window.location.search).get(key);
  },

  getPathId() {
    const parts = window.location.pathname.split('/');
    return parts[parts.length - 1].replace('.html', '') || parts[parts.length - 2];
  },

  showToast(msg, emoji = '✅', duration = 3000) {
    document.querySelectorAll('.toast').forEach(t => t.remove());
    const t = document.createElement('div');
    t.className = 'toast animate-fadeInUp';
    t.innerHTML = `<span>${emoji}</span><span>${msg}</span>`;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), duration);
  },

  generateOrderId() {
    return 'ORD-' + Date.now().toString(36).toUpperCase();
  },

  generateQueueNumber() {
    return Math.floor(Math.random() * 90 + 10);
  },

  getMenuById(id) {
    return MENU_DATA.find(m => m.id === parseInt(id));
  },

  // Generate gradient bg for menu cards
  getCategoryColor(category) {
    const colors = {
      fruit: 'linear-gradient(135deg, #1a2e1a, #0d2e0d)',
      yogurt: 'linear-gradient(135deg, #1a1a2e, #2e1a2e)',
      protein: 'linear-gradient(135deg, #2e1a0d, #2e2e0d)',
      coffee: 'linear-gradient(135deg, #1a0d0d, #2e1a0d)',
      soda: 'linear-gradient(135deg, #0d1a2e, #0d2e2e)',
    };
    return colors[category] || 'linear-gradient(135deg, #1a1a2e, #0d0d1a)';
  },

  updateCartBadge() {
    const count = Store.getCount();
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  // Simulate order status for demo
  getOrderStatusSteps(status) {
    const steps = [
      { key: 'received', label: 'รับออเดอร์แล้ว', emoji: '📋', time: '' },
      { key: 'preparing', label: 'กำลังเตรียมวัตถุดิบ', emoji: '🥤', time: '' },
      { key: 'blending', label: 'กำลังปั่น', emoji: '⚡', time: '' },
      { key: 'ready', label: 'พร้อมรับแล้ว!', emoji: '✅', time: '' },
    ];
    const idx = { received: 0, preparing: 1, blending: 2, ready: 3 }[status] ?? 0;
    return steps.map((s, i) => ({
      ...s,
      state: i < idx ? 'done' : i === idx ? 'active' : 'pending',
    }));
  }
};
