import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Img from '../components/Img'
import './Cart.css'

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart()

  const shipping = cartTotal >= 75 ? 0 : 9.99
  const tax = cartTotal * 0.08
  const total = cartTotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <h1>Your cart is empty</h1>
            <p>Looks like you haven't added anything yet.</p>
            <Link to="/shop" className="btn btn-primary">Start shopping</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="cart-title">Shopping bag</h1>

        <div className="cart-layout">
          {/*items*/}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <Link to={`/product/${item.id}`} className="cart-item-image">
                  <Img product={item} />
                </Link>
                <div className="cart-item-info">
                  <span className="cart-item-cat">{item.category}</span>
                  <Link to={`/product/${item.id}`} className="cart-item-name">{item.name}</Link>
                </div>
                <div className="cart-item-quantity">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <div className="cart-item-price">${item.price * item.quantity}</div>
                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>✕</button>
              </div>
            ))}

            <div className="cart-actions">
              <Link to="/shop" className="btn btn-ghost">← Continue shopping</Link>
              <button onClick={clearCart} className="clear-cart-btn">Clear cart</button>
            </div>
          </div>

          {/*summary*/}
          <div className="order-summary">
            <h2>Order summary</h2>
            <div className="summary-row"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
            <div className="summary-row"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span></div>
            <div className="summary-row"><span>Tax (8%)</span><span>${tax.toFixed(2)}</span></div>
            <div className="summary-divider"></div>
            <div className="summary-row total"><span>Total</span><span>${total.toFixed(2)}</span></div>
            {cartTotal < 75 && (
              <div className="shipping-notice">Add ${(75 - cartTotal).toFixed(2)} more for free shipping</div>
            )}
            <button className="btn btn-primary checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
