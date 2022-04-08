import { formatCurrency } from "../../utils/formatCurrency"
import { CartProduct } from "../CartProduct"

import './style.css'

const Cart = ({ currentSale, setCurrentSale, onRemove }) => {
  return (
    <article className='cart'>
      <header className='cart-header'>
        <h2 className='cart-header__text'>Carrinho de compras</h2>
      </header>
      <section className='cart-body'>
        {
          currentSale.length > 0 ?
            <>
              <ul className='cart__list'>
                {
                  currentSale.map(product => (
                    <CartProduct
                      key={product.id}
                      product={product}
                      onRemove={onRemove}
                    />
                  ))
                }
              </ul>
              <hr className='cart__separator' />
              <p className='cart-total'>Total:
                <b className='cart-total__price'>
                  {
                    formatCurrency(
                      currentSale.reduce(
                        (acc, product) =>
                          acc += product.price, 0
                      )
                    )
                  }
                </b>
              </p>
              <button
                className='cart__button'
                onClick={() => setCurrentSale([])}
              >
                Remover todos
              </button>
            </> :
            <div className='empty-cart'>
              <h3 className='empty-cart__title'>
                Sua sacola está vazia
              </h3>
              <p className='empty-cart__text'>
                Adicione itens
              </p>
            </div>
        }
      </section>
    </article>
  )
}

export { Cart }
