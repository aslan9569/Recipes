import React from 'react';
import classes from './input.module.css';

function Input (props) {
  return (
    <div className={classes.input}>
      <form>
        <input type="text" className={classes.foundCategory}/>
      </form>
    </div>
  )
}

export default Input