import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Shop from './components/Shop';
import Cart from './components/Cart';
import './App.css';

export const CartQuantityContext = React.createContext();

function App() {
  const [items, setItems] = useState(() => {
    return {
      0: {
        name: 'CookBook',
        price: '25.00',
        quantity: 0,
        fullPrice: function () {
          return (Number(this.price) * this.quantity).toFixed(2);
        },
      },
    };
  });
  const [cartQuantity, setCartQuantity] = useState(0);

  function getCartQuantity(obj) {
    let fullQuantity = 0;
    for (const key in obj) {
      fullQuantity += obj[key].quantity;
    }
    return fullQuantity;
  }

  const handleClick = (log) => {
    if (log.name == 'CookBook') {
      setItems({
        ...items,
        0: {
          name: 'CookBook',
          price: '25.00',
          quantity: (items[0].quantity += Number(log.quantity)),
          fullPrice: function () {
            return (Number(this.price) * this.quantity).toFixed(2);
          },
        },
      });
    }
    setCartQuantity(getCartQuantity(items));
  };

  const decrement = (log) => {
    log.quantity -= 1;
    switch (log.name) {
      case 'CookBook':
        setItems({
          ...items,
          0: {
            name: 'CookBook',
            price: log.price,
            quantity: log.quantity,
            fullPrice: function () {
              return (Number(this.price) * this.quantity).toFixed(2);
            },
          },
        });
        break;
    }
    setCartQuantity(getCartQuantity(items));
  };

  const increment = (log) => {
    log.quantity += 1;
    switch (log.name) {
      case 'CookBook':
        setItems({
          ...items,
          0: {
            name: 'CookBook',
            price: log.price,
            quantity: log.quantity,
            fullPrice: function () {
              return (Number(this.price) * this.quantity).toFixed(2);
            },
          },
        });
        break;
    }
    setCartQuantity(getCartQuantity(items));
  };

  const deleted = (log) => {
    log.quantity = 0;
    switch (log.name) {
      case 'CookBook':
        setItems({
          ...items,
          0: {
            name: 'CookBook',
            price: log.price,
            quantity: log.quantity,
            fullPrice: function () {
              return (Number(this.price) * this.quantity).toFixed(2);
            },
          },
        });
        break;
    }
    setCartQuantity(getCartQuantity(items));
  };

  return (
    <>
      <CartQuantityContext.Provider value={cartQuantity}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='shop' element={<Shop handleClick={handleClick} />} />
            <Route
              path='cart'
              element={
                <Cart
                  cartQuantity={cartQuantity}
                  items={items}
                  minus={decrement}
                  plus={increment}
                  dlt={deleted}
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
