import express from 'express'
import Product from '../models/Product.js'

const router = express.Router()

//get all products (supports ?category= &search= &sort=)
router.get('/', async (req, res) => {
  const { category, search, sort } = req.query
  const filter = {}
  if (category && category !== 'all') filter.category = category
  if (search) filter.name = { $regex: search, $options: 'i' }

  let query = Product.find(filter)
  if (sort === 'price-low') query = query.sort({ price: 1 })
  else if (sort === 'price-high') query = query.sort({ price: -1 })

  const products = await query
  res.json(products)
})

//get one product
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (!product) return res.status(404).json({ message: 'Product not found' })
  res.json(product)
})

//add product
router.post('/', async (req, res) => {
  const product = await Product.create(req.body)
  res.status(201).json(product)
})

//update product
router.put('/:id', async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (!product) return res.status(404).json({ message: 'Product not found' })
  res.json(product)
})

//delete product
router.delete('/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id)
  res.json({ message: 'Product deleted' })
})

export default router
