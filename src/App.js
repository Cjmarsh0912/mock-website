import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Contact from './pages/Contact/index';
import Shop from './pages/Shop/index';
import Cart from './pages/Cart/index';
import testData from './data/shopItems.json';
import './assets/App.css';

export const CartQuantityContext = React.createContext();

function App() {
  const shopItems = testData.shopItems.map((obj) => {
    return {
      ...obj,
      fullPrice: function () {
        return (Number(this.price) * this.quantity).toFixed(2);
      },
    };
  });
  const [items, setItems] = useState(shopItems);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [fullPrice, setFullPrice] = useState('0.00');

  function getCartQuantity(obj) {
    let fullQuantity = 0;
    obj.forEach((element) => {
      fullQuantity += element.quantity;
    });
    return fullQuantity;
  }

  function getFullPrice(obj) {
    let fullPrice = 0;
    obj.forEach((element) => {
      fullPrice += Number(element.price) * element.quantity;
    });
    return Number(fullPrice).toFixed(2);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = (log) => {
    const newState = items.map((obj) => {
      if (obj.id === log.id) {
        const newQuantity = obj.quantity + Number(log.quantity);
        return {
          ...obj,
          quantity: newQuantity,
          image: log.image,
        };
      }
      return obj;
    });
    setItems(newState);
  };

  const handleDecrement = (log) => {
    const newState = items.map((obj) => {
      if (obj.id === log.id && log.quantity !== 1) {
        return {
          ...obj,
          quantity: obj.quantity - 1,
        };
      }
      return obj;
    });
    setItems(newState);
  };

  const handleIncrement = (log) => {
    const newState = items.map((obj) => {
      if (obj.id === log.id) {
        return {
          ...obj,
          quantity: obj.quantity + 1,
        };
      }
      return obj;
    });
    setItems(newState);
  };

  const handleDelete = (log) => {
    const newState = items.map((obj) => {
      if (obj.id === log.id) {
        return {
          ...obj,
          quantity: 0,
        };
      }
      return obj;
    });
    setItems(newState);
  };

  useEffect(() => {
    setCartQuantity(getCartQuantity(items));
    setFullPrice(getFullPrice(items));
  }, [items]);

  return (
    <>
      <CartQuantityContext.Provider value={cartQuantity}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home handleSubmit={handleSubmit} />} />
            <Route path='about' element={<About />} />
            <Route
              path='contact'
              element={<Contact handleSubmit={handleSubmit} />}
            />
            <Route
              path='shop'
              element={<Shop shopItems={items} handleClick={handleClick} />}
            />
            <Route
              path='cart'
              element={
                <Cart
                  cartQuantity={cartQuantity}
                  items={items}
                  handleDecrement={handleDecrement}
                  handleIncrement={handleIncrement}
                  handleDelete={handleDelete}
                  fullPrice={fullPrice}
                />
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartQuantityContext.Provider>
    </>
  );
}

export default App;
