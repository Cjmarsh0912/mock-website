import ShopItem from './ShopItem';

import styles from './shop.module.css';

import { ShopData } from '../../interface/interface';

type Props = {
  handleAddToCart: (shopItem: ShopData) => void;
  shopItems: ShopData[];
};

export default function Shop(props: Props) {
  const { handleAddToCart, shopItems } = props;

  return (
    <>
      <main>
        <section className={styles.shop_items}>
          {shopItems.map((item) => {
            return (
              <ShopItem
                key={item.id}
                product={item}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}
