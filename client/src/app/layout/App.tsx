import { useEffect, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Container } from '@mui/material'
import { Product } from '../models/product'
import Catalog from '../../features/catalog/Catalog'
import Header from './Header'

function App () {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  function addProduct () {
    setProducts(prev => [
      ...prev,
      {
        id: prev.length + 101,
        name: 'product' + (prev.length + 1),
        price: prev.length * 100 + 100,
        brand: 'some brand',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/200'
      }
    ])
  }

  return (
    <>
      <CssBaseline />
      <Header></Header>
      <Container>
        <Catalog products={products} addProduct={addProduct} />
      </Container>
    </>
  )
}

export default App
