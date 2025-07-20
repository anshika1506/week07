import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { debounce } from 'lodash'
import ProductCard from '../components/Product/ProductCard'
import ViewToggle from '../components/UI/ViewToggle'
import '../styles/products.css'

function Products() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [view, setView] = useState('grid')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError('Failed to load products. Please try again later.')
        setLoading(false)
        console.error(error)
      })
  }, [])

  const handleSearch = debounce((value) => {
    setSearch(value)
  }, 300)

  const categories = ['all', ...new Set(products.map((product) => product.category))]

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = category === 'all' || product.category === category
        return matchesSearch && matchesCategory
      }),
    [products, search, category]
  )

  return (
    <div className="container fade-in">
      <div className="products-header">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="filter-container">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-select"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
          <ViewToggle view={view} setView={setView} />
        </div>
      </div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className={`products-grid ${view === 'grid' ? 'grid-view' : 'list-view'}`}>
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <ProductCard product={product} view={view} />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Products