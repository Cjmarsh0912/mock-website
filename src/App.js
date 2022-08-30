import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Contact from './pages/Contact/index';
import Shop from './pages/Shop/index';
import Cart from './pages/Cart/index';
import './assets/App.css';

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
  const [fullPrice, setFullPrice] = useState('');

  function getCartQuantity(obj) {
    let fullQuantity = 0;
    for (const key in obj) {
      fullQuantity += obj[key].quantity;
    }
    return fullQuantity;
  }

  function getFullPrice(obj) {
    let fullPrice = 0;
    for (const key in obj) {
      fullPrice += Number(obj[key].price) * obj[key].quantity;
    }
    return Number(fullPrice).toFixed(2);
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
    //setCartQuantity(getCartQuantity(items));
  };

  const handleDecrement = (log) => {
    log.quantity -= 1;
    switch (log.name) {
      case 'CookBook':
        setItems({
          ...items,
          0: {
            name: log.name,
            price: log.price,
            quantity: log.quantity,
            fullPrice: function () {
              return (Number(this.price) * this.quantity).toFixed(2);
            },
          },
        });
        break;
    }
  };

  const handleIncrement = (log) => {
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
  };

  const handleDelete = (log) => {
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

  useEffect(() => {
    setCartQuantity(getCartQuantity(items));
    setFullPrice(getFullPrice(items));
    console.log(fullPrice);
  }, [items]);

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
                  handleDecrement={handleDecrement}
                  handleIncrement={handleIncrement}
                  handleDelete={handleDelete}
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
