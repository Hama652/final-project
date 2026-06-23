import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import productRoutes from './routes/productRoutes.js'
import authRoutes from './routes/authRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import Product from './models/Product.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

//routes
app.get('/', (req, res) => res.json({ message: 'PlayVerse API running' }))
app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/cart', cartRoutes)

//products to seed
const products = [
  { name: 'Sony DualShock 4', category: 'gaming', subcategory: 'controllers', price: 59, originalPrice: 69, image: 'dualshock', badge: 'HOT DROP', inStock: true, description: 'Wireless DualShock 4 controller with precise analog sticks, touchpad, and built-in speaker.', features: ['Wireless Bluetooth', 'Built-in touchpad', 'Share button', 'Rechargeable battery', 'Compatible with PS4 / PC'] },
  { name: 'Razer Kraken Headset', category: 'gaming', subcategory: 'audio', price: 159, originalPrice: 199, image: 'headset', badge: 'BEST SELLER', inStock: true, description: 'Razer Kraken gaming headset with 7.1 surround sound and a retractable noise-canceling mic.', features: ['7.1 Surround Sound', 'Noise-canceling mic', 'Cooling gel cushions', 'RGB lighting', 'Multi-platform'] },
  { name: 'Razer BlackWidow Keyboard', category: 'gaming', subcategory: 'keyboards', price: 189, image: 'keyboard', badge: 'NEW', inStock: true, description: 'Razer BlackWidow mechanical keyboard with tactile green switches and Chroma RGB.', features: ['Mechanical green switches', 'Chroma RGB', 'Aluminum frame', 'USB passthrough', 'Programmable keys'] },
  { name: 'Logitech G502 Mouse', category: 'gaming', subcategory: 'mice', price: 89, image: 'mouse', inStock: true, description: 'Logitech G502 gaming mouse with HERO 25K sensor and 11 programmable buttons.', features: ['HERO 25K sensor', '11 programmable buttons', 'Adjustable weights', 'LIGHTSYNC RGB', 'Mechanical switches'] },
  { name: 'Secretlab Titan Chair', category: 'gaming', subcategory: 'furniture', price: 449, originalPrice: 549, image: 'chair', badge: 'SALE', inStock: true, description: 'Secretlab Titan ergonomic gaming chair with lumbar support and 4D armrests.', features: ['Lumbar support', '4D armrests', 'Recline 165 degrees', 'Cold-cure foam', '5-year warranty'] },
  { name: 'LG UltraGear 27" 4K', category: 'gaming', subcategory: 'monitors', price: 599, image: 'monitor', inStock: true, description: 'LG UltraGear 27-inch 4K monitor with 144Hz refresh rate and 1ms response time.', features: ['4K UHD', '144Hz refresh', '1ms response', 'HDR10', 'G-Sync compatible'] },
  { name: 'Demon Slayer Tanjiro Figure', category: 'anime', subcategory: 'figures', price: 89, image: 'figure', badge: 'EXCLUSIVE', inStock: true, description: 'Officially licensed Demon Slayer Tanjiro collectible figure with premium detailing.', features: ['Officially licensed', 'Premium PVC', 'Detailed paintwork', 'Display base', '23cm tall'] },
  { name: 'Jujutsu Kaisen Hoodie', category: 'anime', subcategory: 'apparel', price: 65, image: 'hoodie', badge: 'TRENDING', inStock: true, description: 'Premium Jujutsu Kaisen pullover hoodie with embroidered character design.', features: ['Cotton-poly blend', 'Embroidered logo', 'Kangaroo pocket', 'Adjustable hood', 'Machine washable'] },
  { name: 'Naruto Manga Box Set', category: 'anime', subcategory: 'books', price: 129, image: 'manga', inStock: true, description: 'Complete Naruto manga box set with exclusive cover art and bonus poster.', features: ['Complete series', 'Exclusive box art', 'Premium printing', 'Bonus poster', 'Collectible'] },
  { name: 'Attack on Titan Posters', category: 'anime', subcategory: 'art', price: 25, image: 'poster', badge: 'BUDGET', inStock: true, description: 'Set of 4 premium Attack on Titan wall posters featuring iconic scenes.', features: ['Set of 4', 'High-quality print', '11x17 inches', 'Matte finish', 'Free shipping'] },
  { name: 'Pikachu Plushie', category: 'anime', subcategory: 'plushies', price: 35, image: 'plushie', badge: 'CUTE', inStock: true, description: 'Officially licensed Pokemon Pikachu plushie, soft and cuddly.', features: ['Officially licensed', 'Super soft', '30cm tall', 'Embroidered details', 'Washable'] },
  { name: 'Anime Sticker Pack', category: 'anime', subcategory: 'accessories', price: 15, image: 'stickers', inStock: true, description: 'Pack of 50 waterproof vinyl anime stickers featuring various series.', features: ['50 stickers', 'Waterproof vinyl', 'UV resistant', 'Various sizes', 'Multiple series'] },
]

//auto-seed if db is empty
const seedIfEmpty = async () => {
  const count = await Product.countDocuments()
  if (count === 0) {
    await Product.insertMany(products)
    console.log('Seeded 12 products')
  }
}

//connect to db then start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected')
    await seedIfEmpty()
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))
  })
  .catch((err) => console.error('DB error:', err.message))
