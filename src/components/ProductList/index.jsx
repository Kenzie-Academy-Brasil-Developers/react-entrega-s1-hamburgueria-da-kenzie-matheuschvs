import { Product } from '../Product'

import './style.css'

const ProductList = ({ searchText, products, handleClick }) => {
  return (
    <section className='product-list-container'>
      {searchText &&
        <h2 className='search-result'>
          Resultados para:
          <strong className='search-result__text'>{searchText}</strong>
        </h2>
      }
      <ul className='product-list'>
        {
          products.map((product) => (
            <Product key={product.id} product={product} handleClick={handleClick} />
          ))
        }
      </ul>
    </section>
  )
}

export { ProductList }
