import { formatCurrency } from '../../utils/formatCurrency'

import './style.css'

const Product = ({ product, handleClick }) => {
  return (
    <li className='card'>
      <figure className='card__image-container'>
        <img
          className='card__image'
          src={product.img}
          alt={product.name}
        />
        <figcaption>
          {product.name}
        </figcaption>
      </figure>
      <section className='card__body'>
        <h3 className='card__title'>{product.name}</h3>
        <p className='card__category'>{product.category}</p>
        <p className='card__price'><b>{formatCurrency(product.price)}</b></p>
        <button
          className='card__button'
          onClick={() => handleClick(product.id)}
        >
          Adicionar
        </button>
      </section>
    </li>
  )
}

export { Product }
