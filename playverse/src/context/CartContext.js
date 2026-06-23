import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'
import { getCart, saveCart } from '../api/cart'

const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export function CartProvider({ children }) {
  const { user } = useAuth()
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('playverse_cart')
    return saved ? JSON.parse(saved) : []
  })

  //when a user logs in, load their saved cart from the database
  useEffect(() => {
    if (user?.token) {
      getCart(user.token).then((dbCart) => {
        if (dbCart && dbCart.length > 0) setCartItems(dbCart)
      })
    }
  }, [user])

  //keep the cart saved - localStorage always, database when logged in
  useEffect(() => {
    localStorage.setItem('playverse_cart', JSON.stringify(cartItems))
    if (user?.token) saveCart(user.token, cartItems)
  }, [cartItems, user])

  function addToCart(product) {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id)
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  function updateQuantity(id, qty) {
    if (qty <= 0) return removeFromCart(id)
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    )
  }

  function clearCart() {
    setCartItems([])
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  )
}
