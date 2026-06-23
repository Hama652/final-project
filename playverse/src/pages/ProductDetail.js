import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { fetchProduct, fetchProducts } from '../api/products'
import ProductCard from '../components/ProductCard'
import Img from '../components/Img'
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [qty, setQty] = useState(1)
  const [tab, setTab] = useState('description')
  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])

  useEffect(() => {
    fetchProduct(id).then(setProduct)
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (!product) return
    fetchProducts(`?category=${product.category}`).then((list) =>
      setRelated(list.filter((p) => p.id !== product.id).slice(0, 4))
    )
  }, [product])

  if (!product) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h1>Loading...</h1>
      </div>
    )
  }

  function addToBag() {
    for (let i = 0; i < qty; i++) addToCart(product)
  }

  function buyNow() {
    addToBag()
    navigate('/cart')
  }

  return (
    <div className="product-detail">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <span>{product.name}</span>
        </div>

        <div className="product-layout">
          <div className="product-detail-image">
            <Img product={product} />
          </div>

          <div className="product-detail-info">
            <span className="product-detail-cat">{product.category} · {product.subcategory}</span>
            <h1 className="product-detail-name">{product.name}</h1>

            <div className="product-detail-stock">
              {product.inStock && <span className="stock-badge">In stock</span>}
            </div>

            <div className="product-detail-pricing">
              <span className="price-current">${product.price}</span>
              {product.originalPrice && <span className="price-original">${product.originalPrice}</span>}
            </div>

            <p className="product-detail-desc">{product.description}</p>

            <div className="quantity-selector">
              <span>Quantity:</span>
              <div className="quantity-controls">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
            </div>

            <div className="product-detail-ctas">
              <button onClick={addToBag} className="btn btn-ghost">Add to cart</button>
              <button onClick={buyNow} className="btn btn-primary">Buy now</button>
            </div>
          </div>
        </div>

        {/*tabs*/}
        <div className="product-tabs">
          <div className="tabs-nav">
            <button className={tab === 'description' ? 'active' : ''} onClick={() => setTab('description')}>Description</button>
            <button className={tab === 'features' ? 'active' : ''} onClick={() => setTab('features')}>Features</button>
          </div>

          <div className="tabs-content">
            {tab === 'description' && <p>{product.description}</p>}
            {tab === 'features' && (
              <ul className="features-list">
                {product.features.map((f, i) => <li key={i}>✓ {f}</li>)}
              </ul>
            )}
          </div>
        </div>

        {/*related*/}
        {related.length > 0 && (
          <div className="related-section">
            <h2 className="section-title">You might also like</h2>
            <div className="products-grid">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
