import { useContext } from 'react'

import classes from './Cart.module.css'
import Card from '../UI/Card'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import CartContext from '../../Store/cart-context'

const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={removeItemHandler.bind(null, item.id)}
            onAdd={addItemHandler.bind(null, item)}
          />
        )
      })}
    </ul>
  )

  return (
    <Modal onCartClose={props.onCartClose}>
      <Card>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onCartClose} className={classes.btn__alt}>
            Close
          </button>
          {hasItems && <button className={classes.btn}>Order</button>}
        </div>
      </Card>
    </Modal>
  )
}

export default Cart
