import { useState, useEffect, useMemo } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../api/products'
import './Shop.css'

function Shop() {
  const { category } = useParams()
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('search') || ''

  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(category || 'all')
  const [sortBy, setSortBy] = useState('default')
  const [priceRange, setPriceRange] = useState([0, 1000])

  useEffect(() => {
    fetchProducts().then(setProducts)
  }, [])

  //filter + sort
  const filtered = useMemo(() => {
    let result = [...products]
    const activeCategory = category || selectedCategory
    if (activeCategory && activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter((p) => p.name.toLowerCase().includes(q))
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price)
    else if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price)
    return result
  }, [products, category, selectedCategory, searchQuery, sortBy, priceRange])

  const title = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All products'

  return (
    <div className="shop-page">
      <div className="shop-hero">
        <div className="container">
          <span className="section-eyebrow">{searchQuery ? `Search: "${searchQuery}"` : 'Catalog'}</span>
          <h1 className="shop-title">{title}</h1>
          <p className="shop-count">{filtered.length} products</p>
        </div>
      </div>

      <div className="container">
        <div className="shop-layout">
          {/*filters*/}
          <aside className="shop-filters">
            <div className="filter-group">
              <h3>Category</h3>
              <div className="filter-options">
                {['all', 'gaming', 'anime'].map((cat) => (
                  <button
                    key={cat}
                    className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h3>Price range</h3>
              <div className="price-range">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                />
                <div className="price-labels">
                  <span>$0</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="filter-group">
              <h3>Sort by</h3>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="filter-select">
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to high</option>
                <option value="price-high">Price: High to low</option>
              </select>
            </div>
          </aside>

          {/*products grid*/}
          <div className="shop-products">
            {filtered.length === 0 ? (
              <div className="no-products">
                <h2>No products found</h2>
                <p>Try adjusting your filters or search.</p>
              </div>
            ) : (
              <div className="products-grid-shop">
                {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
