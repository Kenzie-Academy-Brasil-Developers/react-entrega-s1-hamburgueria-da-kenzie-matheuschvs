import './style.css'

const CartProduct = ({ product, onRemove }) => {
  return (
    <li className='cart-item'>
      <figure className='cart-item__image-container'>
        <img className='cart-item__image' src={product.img} alt={product.name} />
        <figcaption>{product.name}</figcaption>
      </figure>
      <section className='cart-item__body'>
        <h3 className='cart-item__title'>{product.name}</h3>
        <p className='cart-item__category'>{product.category}</p>
      </section>
      <button
        onClick={() => onRemove(product.id)}
        className='cart-item__button'
      >
        Remover
      </button>
    </li>
  )
}

export { CartProduct }
