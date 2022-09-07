import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import increment from '../../assets/images/increment.svg';
import decrement from '../../assets/images/decrement.svg';
import deleted from '../../assets/images/delete.svg';

export default function Cart({
  cartQuantity,
  items,
  handleDecrement,
  handleIncrement,
  handleDelete,
  fullPrice,
}) {
  return (
    <>
      <Header active='none' />
      <main id={cartQuantity == 0 ? 'cart' : ''}>
        {cartQuantity == 0 && (
          <section className='cart-empty'>
            <h3>Shopping Cart</h3>
            <p>You have nothing in your shopping cart!</p>
            <Link to='/shop' className='button'>
              Continue Shopping
            </Link>
          </section>
        )}

        {cartQuantity > 0 && (
          <>
            <section className='cart-item-container'>
              {items.map((item) => {
                console.log(item);
                if (item.quantity > 0) {
                  return (
                    <article key={item.id} className='cart-item'>
                      <div className='cart-item-name'>
                        <div className='cart-item-img-container'>
                          <div
                            style={{ backgroundImage: `url(${item.image})` }}
                            className='cart-item-img'
                          ></div>
                        </div>
                        <h3>{item.name}</h3>
                      </div>
                      <div className='increment-decrement'>
                        <button
                          onClick={() => handleDecrement(item)}
                          className='decrement'
                        >
                          <img src={decrement} />
                        </button>
                        <span className='cart-item-number'>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleIncrement(item)}
                          className='increment'
                        >
                          <img src={increment} />
                        </button>
                      </div>
                      <div className='cart-item-price'>
                        <span className='cart-item-full-price'>
                          ${item.fullPrice()}
                        </span>
                        <button
                          onClick={() => handleDelete(item)}
                          className='delete'
                        >
                          <img
                            style={{ width: '100%', height: '100%' }}
                            src={deleted}
                          />
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
