import styles from './cart.module.css';

import { FaPlus, FaMinus } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

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
      <main id={cartQuantity === 0 ? 'cart' : ''}>
        <header
          style={{ padding: '0 2em', marginTop: '4em' }}
          className={styles.cart_header}
        >
          <div className={styles.container}>
            <h3>Shopping Cart</h3>
          </div>
        </header>
        {cartQuantity == 0 && (
          <section className={styles.cart_empty}>
            <div className={styles.container}>
              <p>You have nothing in your shopping cart!</p>
            </div>
            <div className={styles.container}>
              <NavLink to='/shop/' className='button'>
                Continue Shopping
              </NavLink>
            </div>
          </section>
        )}

        {cartQuantity > 0 && (
          <>
            <section className={styles.cart_item_container}>
              {items.map((item) => {
                if (item.quantity > 0) {
                  return (
                    <article key={item.id} className={styles.cart_item}>
                      <div className={styles.cart_item_name}>
                        <div
                          className={`${styles.cart_item_img_container} ${styles.container}`}
                        >
                          <div
                            style={{ backgroundImage: `url(${item.image})` }}
                            className={styles.cart_item_img}
                          ></div>
                        </div>
                        <span className={styles.container}>
                          <h3>{item.name}</h3>
                        </span>
                      </div>
                      <div className={styles.increment_decrement}>
                        <button
                          aria-label='Minus'
                          className={`${styles.cart_btn} decrement`}
                          onClick={() => handleDecrement(item)}
                        >
                          <span
                            className={`${styles.icon_container} ${styles.container}`}
                          >
                            <FaMinus />
                          </span>
                        </button>
                        <span className={styles.container}>
                          <input
                            className={styles.cart_item_number}
                            readOnly
                            value={item.quantity}
                          />
                        </span>
                        <button
                          aria-label='Plus'
                          className={`${styles.cart_btn} increment`}
                          onClick={() => handleIncrement(item)}
                        >
                          <span
                            className={`${styles.icon_container} ${styles.container}`}
                          >
                            <FaPlus />
                          </span>
                        </button>
                      </div>
                      <div className={styles.cart_item_price}>
                        <span
                          className={`${styles.cart_item_full_price} ${styles.container}`}
                        >
                          ${item.fullPrice()}
                        </span>
                        <button
                          aria-label='Delete'
                          className={`${styles.cart_btn} ${styles.delete}`}
                          onClick={() => handleDelete(item)}
                        >
                          <span
                            className={`${styles.icon_container} ${styles.container}`}
                          >
                            <AiFillDelete />
                          </span>
                        </button>
                      </div>
                    </article>
                  );
                }
              })}
            </section>
            <section className={styles.checkout}>
              <div className={styles.subtotal}>
                <p>Subtotal:</p>
                <span className={styles.full_price}>${fullPrice}</span>
              </div>
              <button className={`${styles.checkout_btn} button`}>
                Checkout
              </button>
            </section>
          </>
        )}
      </main>
    </>
  );
}
