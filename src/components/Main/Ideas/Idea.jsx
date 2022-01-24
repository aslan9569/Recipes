import React from 'react';
import classes from './news.module.css';

function Idea (props) {
  return (
    <div className={classes.ideas}>
      <div>
        <div className={classes.name}>
          {props.idea.name}
        </div>
        <p>
          {props.idea.idea}
        </p>
      </div>
    </div>
  )
}

export default Idea