import { FaPlus, FaMinus } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Cart({
  items,
  cartQuantity,
  fullPrice,
  handleDecrement,
  handleIncrement,
  handleDelete,
}) {
  return (
    <>
      <main id={cartQuantity == 0 ? 'cart' : ''}>
        <section
          style={{ padding: '0 2em', marginTop: '4em' }}
          className='header'
        >
          <div className='container'>
            <h3>Shopping Cart</h3>
          </div>
        </section>
        {cartQuantity == 0 && (
          <section className='cart-empty'>
            <div className='container'>
              <p>You have nothing in your shopping cart!</p>
            </div>
            <div className='container'>
              <Link to='/shop' className='button'>
                Continue Shopping
              </Link>
            </div>
          </section>
        )}

        {cartQuantity > 0 && (
          <>
            <section className='cart-item-container'>
              {items.map((item) => {
                if (item.quantity > 0) {
                  return (
                    <article key={item.id} className='cart-item'>
                      <div className='cart-item-name'>
                        <div className='cart-item-img-container container'>
                          <div
                            style={{ backgroundImage: `url(${item.image})` }}
                            className='cart-item-img'
                          ></div>
                        </div>
                        <span className='container'>
                          <h3>{item.name}</h3>
                        </span>
                      </div>
                      <div className='increment-decrement'>
                        <button
                          aria-label='Minus'
                          className='cart-btn decrement'
                          onClick={() => handleDecrement(item)}
                        >
                          <span className='icon-container container'>
                            <FaMinus />
                          </span>
                        </button>
                        <span className='container'>
                          <input
                            className='cart-item-number'
                            readOnly
                            value={item.quantity}
                          />
                        </span>
                        <button
                          aria-label='Plus'
                          className='cart-btn increment'
                          onClick={() => handleIncrement(item)}
                        >
                          <span className='icon-container container'>
                            <FaPlus />
                          </span>
                        </button>
                      </div>
                      <div className='cart-item-price'>
                        <span className='cart-item-full-price container'>
                          ${item.fullPrice()}
                        </span>
                        <button
                          aria-label='Delete'
                          className='cart-btn delete'
                          onClick={() => handleDelete(item)}
                        >
                          <span className='icon-container container'>
                            <AiFillDelete />
                          </span>
                        </button>
                      </div>
                    </article>
                  );
                }
              })}
            </section>
            <section className='checkout'>
              <div className='subtotal'>
                <p>Subtotal:</p>
                <span className='full-price'>${fullPrice}</span>
              </div>
              <button className='button checkout-btn'>Checkout</button>
            </section>
          </>
        )}
      </main>
    </>
  );
}
