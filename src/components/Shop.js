import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import Temp from '../images/temp.jpg';

export default function Shop({ handleClick }) {
  const [quantity, setQuantity] = useState('1');

  function click(itemName) {
    const newItem = {
      key: uuid(),
      name: itemName,
      quantity: quantity,
    };
    handleClick(newItem);
    setQuantity('1');
  }
  return (
    <>
      <Header active='shop' />
      <main>
        <section className='shop-items'>
          <article className='item'>
            <div className='item-img'>
              <img style={{ height: '100%', width: '36.3rem' }} src={Temp} />
            </div>
            <div className='item-description'>
              <h1>Redmond recipes Ed. 1</h1>
              <div className='item-price-container'>
                <span className='item-price'>$25.00</span>
              </div>
              <p className='item-details'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                impedit ea iusto voluptatum facere, at, numquam eveniet iste
                aliquam maiores repudiandae ratione placeat ad. Quisquam numquam
                tenetur ea, enim delectus atque dignissimos rem voluptatibus
                iste ipsum soluta rerum impedit vel assumenda aliquid, ab
                reprehenderit. Amet impedit molestias nihil quibusdam
                consectetur.
              </p>
              <div className='item-quantity'>
                <span className='item-quantity-lable'>Quantity:</span>
                <input
                  id='quantity'
                  value={quantity}
                  type='number'
                  step='1'
                  min='1'
                  max='999'
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <button
                onClick={() => click('CookBook')}
                className='add-to-cart-btn button'
              >
                Add To Cart
              </button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
