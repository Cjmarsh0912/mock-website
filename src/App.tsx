import { useState, useEffect, useCallback, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

import shopData from './data/shopItems.json';
import cookbook from '../src/assets/images/cookbook.jpg';
import brownies from '../src/assets/images/brownies.jpg';
import applePie from '../src/assets/images/applePie.jpg';

import { ShopData } from './interface/interface';

import './assets/App.css';

function App() {
  const itemImages: string[] = [cookbook, applePie, brownies];
  const [shopItems, setShopItems] = useState((): ShopData[] => {
    return shopData.shopItems.map((obj) => {
      return {
        ...obj,
        image: itemImages[obj.id],
        fullPrice: function () {
          return (Number(this.price) * this.quantity).toFixed(2);
        },
      };
    });
  });

  const cartQuantity: number = useMemo(
    () => shopItems.reduce((total, value) => total + value.quantity, 0),
    [shopItems]
  );

  const fullPrice: number = useMemo(
    () =>
      shopItems.reduce(
        (total, value) => total + Number(value.price) * value.quantity,
        0
      ),
    [shopItems]
  );

  // Adds the specified item and item quantity to the cart
  const handleAddToCart = (shopItem: ShopData) => {
    const newState = [...shopItems].map((item) => {
      if (item.id === shopItem.id) {
        const newQuantity = item.quantity + Number(shopItem.quantity);
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    setShopItems(newState);
  };

  // Decreases the quantity of a specified item in the cart
  const handleDecrement = (shopItem: ShopData) => {
    const newState = [...shopItems].map((item) => {
      if (item.id === shopItem.id && shopItem.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setShopItems(newState);
  };

  // Increases the quantity of a specified item in the cart
  const handleIncrement = (shopItem: ShopData) => {
    const newState = [...shopItems].map((item) => {
      if (item.id === shopItem.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setShopItems(newState);
  };

  // Deletes a specified item from the cart
  const handleDelete = (shopItem: ShopData) => {
    const newState = [...shopItems].map((item) => {
      if (item.id === shopItem.id) {
        return {
          ...item,
          quantity: 0,
        };
      }
      return item;
    });
    setShopItems(newState);
  };

  // Retrieves shopItems that were in the cart before reloading or closing website
  useEffect(() => {
    const retrieveItems: ShopData[] = JSON.parse(
      localStorage.getItem('items')!
    );
    const retrieveCartQuantity: number = JSON.parse(
      localStorage.getItem('cartQuantity')!
    );
    if (retrieveCartQuantity > 0) {
      setShopItems(
        retrieveItems.map((obj) => {
          return {
            ...obj,
            fullPrice: function () {
              return (Number(this.price) * this.quantity).toFixed(2);
            },
          };
        })
      );
    }
  }, []);

  // Saves shopItems to cart for next visit
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(shopItems));
    localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
  }, [shopItems, cartQuantity]);

  return (
    <>
      <BrowserRouter>
        <Navbar cartQuantity={cartQuantity} />
        <Routes>
          <Route path='/mock-website' element={<Home />} />
          <Route path='/about/' element={<About />} />
          <Route path='/contact/' element={<Contact />} />
          <Route
            path='/shop/'
            element={
              <Shop shopItems={shopItems} handleAddToCart={handleAddToCart} />
            }
          />
          <Route
            path='/cart/'
            element={
              <Cart
                shopItems={shopItems}
                cartQuantity={cartQuantity}
                fullPrice={fullPrice}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                handleDelete={handleDelete}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
