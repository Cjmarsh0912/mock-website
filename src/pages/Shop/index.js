import { useState } from 'react';
import ShopItem from './ShopItem';

export default function Shop({ handleAddToCart, shopItems }) {
  const [quantity, setQuantity] = useState('1');

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
      };
      handleAddToCart(newItem);
      setQuantity('1');
      alert('Added to cart');
    }
  };
  return (
    <>
      <main>
        <section className='shop-items'>
          {shopItems.map((item, id) => {
            return (
              <ShopItem
                key={item.id}
                product={item}
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
