import styles from './shop.module.css';

export default function ShopItem({
  product,
  productQuantity,
  updateQuantity,
  addToCart,
}) {
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
            value={productQuantity}
            type='number'
            step='1'
            min='1'
            max='999'
            onChange={(e) => updateQuantity(e)}
          />
        </div>
        <button onClick={() => addToCart(product)} className='button'>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
