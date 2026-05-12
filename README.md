# 🥤 BlendBar — ระบบสั่งน้ำปั่นผ่าน QR Code

ระบบ Self-Order สำหรับร้านน้ำปั่น ลูกค้าสแกน QR Code ที่โต๊ะ → สั่งเมนู → ชำระเงิน → ติดตามออเดอร์

---

## 🚀 วิธีใช้งาน

เปิดไฟล์ **`index.html`** ด้วย Browser (Chrome / Edge แนะนำ) ได้เลย — ไม่ต้องติดตั้งอะไรเพิ่มเติม

---

## 📁 โครงสร้างไฟล์

```
📦 test ai shop/
├── index.html                    ← หน้าเริ่มต้น (ลิงก์ทุกหน้า)
├── css/
│   └── styles.css                ← Design System ทั้งหมด
├── js/
│   └── app.js                    ← Menu Data + Cart Store + Utilities
└── pages/
    ├── customer/
    │   ├── welcome.html           ← หน้าต้อนรับ (QR scan entry)
    │   ├── menu.html              ← หน้าเมนูพร้อม filter + search
    │   ├── customize.html         ← ปรับแต่งเมนู (หวาน/แข็ง/ท็อปปิ้ง)
    │   ├── cart.html              ← ตะกร้าสินค้า + คูปอง
    │   ├── payment.html           ← ชำระเงิน (PromptPay QR)
    │   └── tracking.html          ← ติดตามสถานะออเดอร์ real-time
    ├── admin/
    │   ├── dashboard.html         ← แดชบอร์ดยอดขาย + กราฟ
    │   ├── orders.html            ← จัดการออเดอร์ live
    │   └── menu-mgmt.html         ← จัดการเมนู (เพิ่ม/แก้/ปิด)
    └── qr-generator.html          ← สร้าง QR Code ทุกโต๊ะ
```

---

## 🎯 Flow การใช้งาน

```
ลูกค้า สแกน QR → welcome.html?table=T1
        ↓
     เลือกเมนู → menu.html
        ↓
    ปรับแต่งสูตร → customize.html
        ↓
    ดูตะกร้า → cart.html (ใส่คูปองได้)
        ↓
    ชำระเงิน → payment.html (PromptPay QR)
        ↓
    ติดตามออเดอร์ → tracking.html (สถานะ live)

ร้าน เห็นออเดอร์ → admin/orders.html
     กดเปลี่ยนสถานะ → ลูกค้าเห็นอัตโนมัติ
```

---

## 🛒 ฟีเจอร์ลูกค้า

| หน้า | ฟีเจอร์ |
|------|---------|
| Welcome | โลโก้ร้าน, banner โปรโมชั่น, auto-detect โต๊ะ |
| Menu | 20 เมนู, 5 หมวด, search, filter, best seller badge |
| Customize | ขนาด S/M/L, หวาน 5 ระดับ, น้ำแข็ง, นม 5 ชนิด, ท็อปปิ้ง 6 อย่าง, extras |
| Cart | แก้ quantity, คูปองโค้ด (BLEND50/WELCOME20/VIP100), ยอดสุทธิ |
| Payment | PromptPay QR, countdown 2 นาที, เสียง success |
| Tracking | สถานะ 4 ขั้น, auto-advance demo, เสียงแจ้งเตือน |

---

## 🖥 ฟีเจอร์ Admin

| หน้า | ฟีเจอร์ |
|------|---------|
| Dashboard | ยอดขาย, กราฟ 7 วัน, top menus, สถานะโต๊ะ 20 โต๊ะ |
| Orders | live feed, filter by status, กดเปลี่ยนสถานะ, add demo order |
| Menu Mgmt | เพิ่ม/แก้/ลบ/เปิด-ปิดเมนู, emoji picker, search |

---

## 🎨 Design System

- **Theme:** Tropical Dark — bg `#0d0d1a`, surface `#1a1a2e`
- **Primary:** Lime `#a3e635` | **Secondary:** Orange `#fb923c` | **Accent:** Pink `#f472b6`
- **Font:** Outfit (Google Fonts)
- **Effects:** Glassmorphism, gradient text, floating animations, pulse glow

---

## 💡 คูปองทดสอบ

| Code | ส่วนลด |
|------|--------|
| `BLEND50` | ฿50 |
| `WELCOME20` | ฿20 |
| `VIP100` | ฿100 |

---

## 🔧 ขั้นตอนต่อไป (Production)

1. **เปลี่ยน Base URL** ใน `qr-generator.html` เป็น domain จริง
2. **เชื่อม Firebase** — แทนที่ localStorage ด้วย Firestore
3. **ชำระเงินจริง** — เชื่อม PromptPay API / Omise / Stripe
4. **Deploy** — Vercel (Frontend) + Firebase (Backend)

---

## 📱 ทดสอบบนมือถือ

เปิด `index.html` บน Chrome → กด **DevTools → Toggle Device** → เลือก iPhone 14 Pro
