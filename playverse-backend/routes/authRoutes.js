import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import auth from '../middleware/auth.js'

const router = express.Router()

function makeToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

//register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body
  const exists = await User.findOne({ email })
  if (exists) return res.status(400).json({ message: 'Email already registered' })

  const user = await User.create({ name, email, password })
  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: makeToken(user._id),
  })
})

//login
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }
  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: makeToken(user._id),
  })
})

//get current user
router.get('/me', auth, async (req, res) => {
  res.json(req.user)
})

export default router
