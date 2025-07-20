import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductDetails from '../components/Product/ProductDetails'

function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError('Failed to load product details. Please try again later.')
        setLoading(false)
        console.error(error)
      })
  }, [id])

  return (
    <div className="container">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : product ? (
        <ProductDetails product={product} />
      ) : null}
    </div>
  )
}

export default Product