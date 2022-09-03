import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import ShopItem from './ShopItem';
import cookbook from '../../assets/images/cookbook.jpg';
import brownies from '../../assets/images/brownies.jpg';

export default function Shop({ handleClick, shopItems }) {
  const [quantity, setQuantity] = useState('1');
  const itemImages = [cookbook, brownies];
  const [buttonText, setButtonText] = useState('Add To Cart');

  const updateQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const addToCart = (item) => {
    if (quantity > 100) alert('Error: Cannot purchase more than 100 at a time');
    else if (quantity < 1 || quantity === '')
      alert('Error: must have a quantity greater than 0');
    else {
      const newItem = {
        id: item.id,
        quantity: quantity,
        image: itemImages[item.id],
      };
      handleClick(newItem);
      setQuantity('1');
    }
  };
  return (
    <>
      <Header active='shop' />
      <main>
        <section className='shop-items'>
          {shopItems.map((item, id) => {
            return (
              <ShopItem
                key={item.id}
                productImage={itemImages[id]}
                product={item}
                buttonText={buttonText}
                productQuantity={quantity}
                updateQuantity={updateQuantity}
                addToCart={addToCart}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}
