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
}) {
  return (
    <>
      <Header active='none' />
      <main>
        {cartQuantity == 0 && (
          <section className='cart-empty'>
            <h3>Shopping Cart</h3>
            <p>You have nothing in your shopping cart!</p>
            <Link to='/shop' className='button btn-lrg'>
              Continue Shopping
            </Link>
          </section>
        )}

        {cartQuantity > 0 && (
          <section className='cart-item-container'>
            {Object.entries(items).map(([id, item]) => {
              if (item.quantity > 0) {
                return (
                  <article key={id} className='cart-item'>
                    <div className='item-name'>
                      <div className='item-img-container'>
                        <div className='item-img'></div>
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
                      <span className='item-number'>{item.quantity}</span>
                      <button
                        onClick={() => handleIncrement(item)}
                        className='increment'
                      >
                        <img src={increment} />
                      </button>
                    </div>
                    <div className='item-price'>
                      <span className='full-price'>${item.fullPrice()}</span>
                      <button
                        onClick={() => handleDelete(item)}
                        className='delete'
                      >
                        <img src={deleted} />
                      </button>
                    </div>
                  </article>
                );
              }
            })}
          </section>
        )}
      </main>
    </>
  );
}

/*Object.entries(items).map(([id, item]) => {
  if (item.quantity > 0) {
    return (
      <section className='cart-item-container'>
        <article className='cart-item'>
          <div className='item-name'>
            <div className='item-img-container'>
              <div className='item-img'></div>
            </div>
            <h3>{item.name}</h3>
          </div>
          <div className='increment-decrement'>
            <button className='decrement'>
              <img src={decrement} />
            </button>
            <span className='item-number'>{item.quantity}</span>
            <button className='increment'>
              <img src={increment} />
            </button>
          </div>
          <div className='item-price'>
            <span className='full-price'>${item.fullPrice()}</span>
            <button className='delete'>
              <img src={deleted} />
            </button>
          </div>
        </article>
      </section>
    );
  }
})*/
