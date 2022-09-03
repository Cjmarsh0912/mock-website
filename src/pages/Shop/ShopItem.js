import React, { useState } from 'react';

export default function ShopItem({
  productImage,
  product,
  productQuantity,
  updateQuantity,
  buttonText,
  addToCart,
}) {
  return (
    <article className='item'>
      <div className='product-img'>
        <img style={{ height: '100%', width: '36.3rem' }} src={productImage} />
      </div>
      <div className='item-description'>
        <h1>{product.name}</h1>
        <div className='item-price-container'>
          <span className='item-price'>${product.price}</span>
        </div>
        <p className='item-details'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem impedit
          ea iusto voluptatum facere, at, numquam eveniet iste aliquam maiores
          repudiandae ratione placeat ad. Quisquam numquam tenetur ea, enim
          delectus atque dignissimos rem voluptatibus iste ipsum soluta rerum
          impedit vel assumenda aliquid, ab reprehenderit. Amet impedit
          molestias nihil quibusdam consectetur.
        </p>
        <div className='item-quantity'>
          <span className='item-quantity-lable'>Quantity:</span>
          <input
            id='quantity'
            value={productQuantity}
            type='number'
            step='1'
            min='1'
            max='999'
            onChange={(e) => updateQuantity(e)}
          />
        </div>
        <button
          onClick={() => addToCart(product)}
          className='add-to-cart-btn button'
        >
          {buttonText}
        </button>
      </div>
    </article>
  );
}