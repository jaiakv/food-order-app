import { useRef, useState } from 'react'

import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  const amountRef = useRef()
  const [formIsValid, setFormIsValid] = useState(true)

  const submitHandler = (event) => {
    event.preventDefault()

    const addToCartAmount = amountRef.current.value
    const addToCartAmountNum = +addToCartAmount

    if (
      addToCartAmount.trim().length === '0' ||
      addToCartAmountNum < 0 ||
      addToCartAmountNum > 5
    ) {
      setFormIsValid(false)
      return
    }

    props.onAddToCart(addToCartAmountNum)
  }

  return (
    <form>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button onClick={submitHandler} className={classes['atc-btn']}>
        Add to cart
      </button>
      {!formIsValid && <p>Please enter a valid amount :)</p>}
    </form>
  )
}

export default MealItemForm
