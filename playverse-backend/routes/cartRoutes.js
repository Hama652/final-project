import express from 'express'
import User from '../models/User.js'
import auth from '../middleware/auth.js'

const router = express.Router()

//get the logged-in user's cart
router.get('/', auth, async (req, res) => {
  const user = await User.findById(req.user._id)
  res.json(user.cart || [])
})

//save the logged-in user's cart
router.put('/', auth, async (req, res) => {
  const user = await User.findById(req.user._id)
  user.cart = req.body.cart || []
  await user.save()
  res.json(user.cart)
})

export default router
