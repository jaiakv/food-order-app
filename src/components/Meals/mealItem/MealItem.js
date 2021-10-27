import React, { useContext } from 'react'

import MealItemForm from './MealItemForm'
import classes from './MealItem.module.css'
import CartContext from '../../../Store/cart-context'

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    })
  }

  return (
    <li key={props.id} className={classes['meal-div']}>
      <div>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  )
}

export default MealItem
