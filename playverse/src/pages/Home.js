import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Img from '../components/Img'
import { fetchProducts } from '../api/products'
import './Home.css'

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts().then(setProducts)
  }, [])

  const featured = products.filter((p) => p.badge).slice(0, 4)
  const gaming = products.filter((p) => p.category === 'gaming').slice(0, 4)
  const anime = products.filter((p) => p.category === 'anime').slice(0, 4)

  return (
    <div>
      {/*hero*/}
      <section className="hero">
        <div className="hero-container">
          <div>
            <div className="hero-tag">New Drop · Live now</div>
            <h1 className="hero-title">
              Gaming gear<br />
              meets <span className="text-pink">anime</span><br />
              <span className="text-yellow">collectibles.</span>
            </h1>
            <p className="hero-desc">
              Premium gaming hardware, official anime merch, and exclusive drops —
              all in one place.
            </p>
            <div className="hero-ctas">
              <Link to="/shop" className="btn btn-primary">Shop now</Link>
              <Link to="/about" className="btn btn-ghost">How it works</Link>
            </div>
            <div className="hero-stats">
              <div><span className="hero-stat-num">50K+</span><span className="hero-stat-label">Customers</span></div>
              <div><span className="hero-stat-num">2.5K+</span><span className="hero-stat-label">Products</span></div>
              <div><span className="hero-stat-num">4.9★</span><span className="hero-stat-label">Rating</span></div>
            </div>
          </div>

          {/*show the showcase once products load*/}
          {products.length > 0 && (
            <div className="hero-visual">
              <div className="hero-mini-card top-r">
                <Img product={products[6]} />
                <p className="hero-mini-name">{products[6].name}</p>
                <p className="hero-mini-price">${products[6].price}</p>
              </div>

              <div className="hero-showcase">
                <span className="hero-showcase-badge">HOT DROP</span>
                <Img product={products[0]} className="hero-showcase-img" />
                <div className="hero-showcase-bottom">
                  <h3>{products[0].name}</h3>
                  <p>{products[0].subcategory}</p>
                  <div className="hero-showcase-row">
                    <span className="hero-showcase-price">${products[0].price}</span>
                    <Link to={`/product/${products[0].id}`} className="hero-showcase-btn">View →</Link>
                  </div>
                </div>
              </div>

              <div className="hero-mini-card bot-l">
                <Img product={products[1]} />
                <p className="hero-mini-name">{products[1].name}</p>
                <p className="hero-mini-price">${products[1].price}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/*categories*/}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Shop by category</h2>
          <div className="categories-grid">
            <Link to="/shop/gaming" className="category-card category-gaming">
              <h3>Gaming</h3>
              <p>Controllers, headsets, peripherals & more</p>
            </Link>
            <Link to="/shop/anime" className="category-card category-anime">
              <h3>Anime</h3>
              <p>Figures, apparel, posters & collectibles</p>
            </Link>
          </div>
        </div>
      </section>

      {/*featured*/}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured products</h2>
            <Link to="/shop" className="section-link">View all →</Link>
          </div>
          <div className="products-grid">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/*gaming*/}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Level up your setup</h2>
            <Link to="/shop/gaming" className="section-link">View all →</Link>
          </div>
          <div className="products-grid">
            {gaming.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/*anime*/}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Official anime merch</h2>
            <Link to="/shop/anime" className="section-link">View all →</Link>
          </div>
          <div className="products-grid">
            {anime.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
