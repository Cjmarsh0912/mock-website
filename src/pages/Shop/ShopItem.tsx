import { useState } from 'react';

import styles from './shop.module.css';

import { ShopData } from '../../interface/interface';

type Props = {
  product: ShopData;
  handleAddToCart: (shopItem: ShopData) => void;
};

export default function ShopItem(props: Props) {
  const { product, handleAddToCart } = props;
  const [quantity, setQuantity] = useState<string>('1');

  const addToCart = (shopItem: ShopData) => {
    if (Number(quantity) > 100)
      alert('Error: Cannot purchase more than 100 at a time');
    else if (Number(quantity) < 1 || quantity === '')
      alert('Error: must have a quantity greater than 0');
    else {
      const newItem: ShopData = {
        ...shopItem,
        quantity: Number(quantity),
      };
      handleAddToCart(newItem);
      setQuantity('1');
      alert('Added to cart');
    }
  };
  return (
    <article className={styles.shop_item}>
      <div className={styles.item_img_container}>
        <img
          style={{ height: '100%', maxWidth: 'inherit' }}
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className={styles.item_description}>
        <h1>{product.name}</h1>
        <div className={styles.item_price_container}>
          <span className={styles.item_price}>${product.price}</span>
        </div>
        <p className={styles.item_details}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem impedit
          ea iusto voluptatum facere, at, numquam eveniet iste aliquam maiores
          repudiandae ratione placeat ad. Quisquam numquam tenetur ea, enim
          delectus atque dignissimos rem voluptatibus iste ipsum soluta rerum
          impedit vel assumenda aliquid, ab reprehenderit. Amet impedit
          molestias nihil quibusdam consectetur.
        </p>
        <div className={styles.item_quantity}>
          <span className={styles.item_quantity_label}>Quantity:</span>
          <input
            id={styles['quantity']}
            value={quantity}
            type='number'
            step='1'
            min='1'
            max='999'
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button onClick={() => addToCart(product)} className='button'>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
