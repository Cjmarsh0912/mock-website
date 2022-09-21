import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/';
import About from './pages/About/';
import Contact from './pages/Contact/';
import Shop from './pages/Shop/';
import Cart from './pages/Cart/';
import shopData from './data/shopItems.json';
import cookbook from '../src/assets/images/cookbook.jpg';
import brownies from '../src/assets/images/brownies.jpg';
import applePie from '../src/assets/images/applePie.jpg';
import './assets/App.css';

function App() {
  const itemImages = [cookbook, applePie, brownies];
  const shopItems = shopData.shopItems.map((obj) => {
    return {
      ...obj,
      image: itemImages[obj.id],
      fullPrice: function () {
        return (Number(this.price) * this.quantity).toFixed(2);
      },
    };
  });
  const [items, setItems] = useState(() => {
    return shopItems;
  });
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

  const handleAddToCart = (log) => {
    const newState = items.map((obj) => {
      if (obj.id === log.id) {
        const newQuantity = obj.quantity + Number(log.quantity);
        return {
          ...obj,
          quantity: newQuantity,
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
    const retrieveItems = JSON.parse(localStorage.getItem('items'));
    const retrieveCartQuantity = JSON.parse(
      localStorage.getItem('cartQuantity')
    );
    const retrieveFullPrice = JSON.parse(localStorage.getItem('fullPrice'));
    if (retrieveCartQuantity > 0) {
      setItems(
        retrieveItems.map((obj) => {
          return {
            ...obj,
            fullPrice: function () {
              return (Number(this.price) * this.quantity).toFixed(2);
            },
          };
        })
      );
      setCartQuantity(retrieveCartQuantity);
      setFullPrice(retrieveFullPrice);
    }
  }, []);

  useEffect(() => {
    setCartQuantity(getCartQuantity(items));
    setFullPrice(getFullPrice(items));

    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
    localStorage.setItem('fullPrice', JSON.stringify(fullPrice));
  }, [items, cartQuantity]);

  return (
    <>
      <BrowserRouter>
        <Navbar cartQuantity={cartQuantity} />
        <Routes>
          <Route
            path='/mock-website'
            element={<Home handleSubmit={handleSubmit} />}
          />
          <Route path='/about/' element={<About />} />
          <Route
            path='/contact/'
            element={<Contact handleSubmit={handleSubmit} />}
          />
          <Route
            path='/shop/'
            element={
              <Shop shopItems={items} handleAddToCart={handleAddToCart} />
            }
          />
          <Route
            path='/cart/'
            element={
              <Cart
                items={items}
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
