import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Img from './Img'
import './ProductCard.css'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  function add(e) {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <Link to={`/product/${product.id}`} className="card">
      <div className="card-img">
        <Img product={product} />
        {product.badge && <span className="badge">{product.badge}</span>}
        <button className="add-btn" onClick={add}>Add to cart</button>
      </div>
      <div className="card-body">
        <span className="card-cat">{product.category}</span>
        <h3>{product.name}</h3>
        <div className="card-price">
          ${product.price}
          {product.originalPrice && <span className="old">${product.originalPrice}</span>}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
