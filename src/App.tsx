import React, { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShown, setcartIsShown] = useState(false)

  const showCartHandler = () => {
    setcartIsShown(true);
  }
  const hideCartHandler = () => {
    setcartIsShown(false);
  }

  return (
    <div>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
