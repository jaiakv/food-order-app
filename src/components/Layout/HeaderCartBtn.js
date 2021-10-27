import { useContext, useState, useEffect } from 'react'
import classes from './HeaderCartBtn.module.css'
import cartIcon from '../../assets/cart-icon.svg'
import CartContext from '../../Store/cart-context'

const HeaderCartBtn = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)

  const cartCtx = useContext(CartContext)
  const itemsInCart = cartCtx.items.reduce((totalItems, items) => {
    return totalItems + items.amount
  }, 0)

  const btnClasses = `${classes['header-btn']} ${
    btnIsHighlighted ? classes.bump : ''
  }`

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return
    }

    setBtnIsHighlighted(true)

    const bump = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 200)

    return () => {
      clearInterval(bump)
    }
  }, [cartCtx.items])

  return (
    <button className={btnClasses} onClick={props.onCartOpen}>
      <span>
        <img src={cartIcon} alt="Cart" />
      </span>
      <span className={classes['cart-text']}>Your cart</span>
      <span className={classes['cart-amount']}>{itemsInCart}</span>
    </button>
  )
}

export default HeaderCartBtn
