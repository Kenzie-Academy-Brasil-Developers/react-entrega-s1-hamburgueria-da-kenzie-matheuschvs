import { useEffect, useState } from 'react';

import { Header } from './components/Header'
import { ProductList } from './components/ProductList'
import { Cart } from './components/Cart'

import './reset.css';
import './global.css';
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
      .then(response => response.json())
      .then(data => {
        setFilteredProducts(data)
        setProducts(data)
      })
  }, [])

  function showProducts(searchText) {
    setSearchText(searchText)

    if (searchText) {
      const lowerCaseText = searchText.toLowerCase()
      const foundProducts = products.filter(product => {
        return product.name.toLowerCase().includes(lowerCaseText) ||
          product.category.toLowerCase().includes(lowerCaseText)
      })

      setFilteredProducts(foundProducts)
    } else {
      setFilteredProducts(products)
    }
  }

  function handleClick(productId) {
    const productInCart = currentSale.find(product => product.id === productId)

    if (productInCart) {
      productInCart.quantity += 1
      setCurrentSale([...currentSale])
    } else {
      const product = products.find(product => product.id === productId)
      Object.assign(product, { quantity: 1 })

      setCurrentSale([...currentSale, product])
    }

  }

  function handleRemoveFromCart(productId) {
    const newSale = currentSale.filter(product => product.id !== productId)

    setCurrentSale(newSale)
  }

  return (
    <div className="App">
      <Header showProducts={showProducts} />
      <ProductList
        searchText={searchText}
        products={filteredProducts}
        handleClick={handleClick}
      />
      <Cart
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
}

export default App;
