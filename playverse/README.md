# 🎮 PlayVerse - Gaming × Anime E-Commerce

A full-stack e-commerce platform for gaming gear and anime collectibles.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher) - [Download here](https://nodejs.org)
- npm (comes with Node.js)
- Code editor (VS Code recommended)

### Installation

1. **Open terminal in this folder** (where this README is)

2. **Install dependencies:**
   ```bash
   npm install
   ```
   This will install React, React Router, and other dependencies. Takes about 2-3 minutes.

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will open automatically at `http://localhost:3000`

### Build for Production
```bash
npm run build
```
This creates an optimized `build` folder ready to deploy.

---

## 📁 Project Structure

```
playverse/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/             # Reusable components
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Footer.js
│   │   ├── Footer.css
│   │   ├── ProductCard.js
│   │   ├── ProductCard.css
│   │   └── ProductIcon.js
│   ├── pages/                  # Page components
│   │   ├── Home.js + .css
│   │   ├── Shop.js + .css
│   │   ├── ProductDetail.js + .css
│   │   ├── Cart.js + .css
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Auth.css
│   │   ├── About.js + .css
│   ├── context/
│   │   └── CartContext.js      # Cart state management
│   ├── data/
│   │   └── products.js         # Sample product data
│   ├── styles/
│   │   └── global.css          # Global styles & variables
│   ├── App.js                  # Main app & routing
│   └── index.js                # Entry point
└── package.json
```

---

## 🎨 Design System

### Colors
```css
--color-bg: #1A0B2E          /* Deep indigo background */
--color-pink: #FF2D7E         /* Anime accent */
--color-yellow: #FFE600       /* Gaming accent */
--color-green: #9FFF3D        /* Status indicators */
```

### Fonts
- **Display:** Archivo Black (headings)
- **Body:** Inter (everything else)

---

## 🧭 Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Hero, featured products, categories |
| `/shop` | Shop | All products with filters |
| `/shop/:category` | Shop | Filtered by category (gaming/anime) |
| `/product/:id` | Product Detail | Single product with details |
| `/cart` | Cart | Shopping cart with items |
| `/login` | Login | User login |
| `/register` | Register | User registration |
| `/about` | About | About PlayVerse |

---

## 🎯 Features Implemented

✅ **Home Page**
- Hero section with animated product showcase
- Category cards (Gaming & Anime)
- Featured products grid
- Newsletter signup

✅ **Shop Page**
- Filter by category
- Filter by price range
- Sort by price/rating
- Search functionality
- Responsive grid

✅ **Product Detail**
- Image gallery
- Quantity selector
- Add to cart / Buy now
- Tabs (Description, Features, Reviews)
- Related products

✅ **Shopping Cart**
- Add/remove items
- Update quantities
- Calculate totals (subtotal, shipping, tax)
- Free shipping threshold
- Persistent cart (localStorage)

✅ **Authentication Pages**
- Login form (ready for backend)
- Register form (ready for backend)
- Social login buttons

✅ **General**
- Responsive design (mobile, tablet, desktop)
- React Router navigation
- Context API for cart state
- localStorage persistence
- Custom design system

---

## 🔮 Next Steps (Backend Integration)

The frontend is **ready to connect to your backend**. When you build the backend:

1. **Login/Register pages** → Connect to `/api/auth/login` and `/api/auth/register`
2. **Products data** → Replace `src/data/products.js` with API calls to `/api/products`
3. **Cart** → Optionally sync cart with backend for logged-in users
4. **Add new pages:** Checkout, User Profile, Order History, Admin Dashboard

### Example API Integration

Replace the products import:
```javascript
// Before (current):
import products from '../data/products';

// After (with backend):
import { useEffect, useState } from 'react';

const [products, setProducts] = useState([]);
useEffect(() => {
  fetch('http://localhost:5000/api/products')
    .then(res => res.json())
    .then(data => setProducts(data));
}, []);
```

---

## 📱 Responsive Design

The site is fully responsive across:
- **Desktop:** 1024px+
- **Tablet:** 768px - 1023px
- **Mobile:** Below 768px

---

## 🛠️ Tech Stack

- **React 18** - UI library
- **React Router 6** - Navigation
- **Context API** - State management
- **CSS Modules** - Component styling
- **localStorage** - Cart persistence

---

## 💡 Tips

- All product images are SVG icons (replace with real images later)
- All prices, ratings, and reviews are sample data
- Authentication is not implemented yet (forms are ready)
- Backend will be added next
