import React, { useState } from 'react'
import Header from './components/Layout/Header'
import AvailableMeals from './components/Meals/AvailableMeals'
import Cart from './components/Cart/Cart'
import CartProvider from './Store/CartProvider'

function App() {
  const [cartVisible, setCartVisible] = useState(false)

  const cartOpenHandler = () => {
    setCartVisible(true)
  }

  const cartCloseHandler = () => {
    setCartVisible(false)
  }

  return (
    <CartProvider>
      {cartVisible && <Cart onCartClose={cartCloseHandler} />}
      <Header onCartOpen={cartOpenHandler} />
      <AvailableMeals />
    </CartProvider>
  )
}

export default App
