import classes from './Header.module.css'
import HeaderCartBtn from './HeaderCartBtn'

const Header = (props) => {
  return (
    <div className={classes.header}>
      <span className={classes.logo}>ReactMeals</span>
      <HeaderCartBtn onCartOpen={props.onCartOpen} />
    </div>
  )
}

export default Header
