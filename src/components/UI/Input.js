import React from 'react'

import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label className={classes['amount-label']} htmlFor={props.input.id}>
        {props.label}
      </label>
      <input ref={ref} className={classes['amount-input']} {...props.input} />
    </div>
  )
})

export default Input
