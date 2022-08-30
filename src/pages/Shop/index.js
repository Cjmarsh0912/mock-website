import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from '../../components/Header';
import ShopItem from './ShopItem';
import Temp from '../../assets/images/temp.jpg';
import brownies from '../../assets/images/brownies.jpg';

export default function Shop({ handleClick }) {
  const [quantity, setQuantity] = useState('1');

  const updateQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const addToCart = (itemName, itemPrice) => {
    const newItem = {
      key: uuid(),
      name: itemName,
      price: itemPrice,
      quantity: quantity,
    };
    handleClick(newItem);
    setQuantity('1');
  };
  return (
    <>
      <Header active='shop' />
      <main>
        <section className='shop-items'>
          <ShopItem
            productImage={Temp}
            productName='CookBook'
            productPrice='25.00'
            productQuantity={quantity}
            updateQuantity={updateQuantity}
            addToCart={addToCart}
          />
          <ShopItem
            productImage={brownies}
            productName='Brownies'
            productPrice='10.00'
            productQuantity={quantity}
            updateQuantity={updateQuantity}
            addToCart={addToCart}
          />
        </section>
      </main>
    </>
  );
}
