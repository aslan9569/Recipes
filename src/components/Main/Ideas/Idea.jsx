import React from "react";
import classes from "./news.module.css";
import PropTypes from 'prop-types';

function Idea(props) {
  return (
    <div className={classes.ideas}>
      <div>
        <div className={classes.name}>{props.idea.name}</div>
        <p>{props.idea.idea}</p>
      </div>
    </div>
  );
}
Idea.propTypes = {
  idea: PropTypes.object.isRequired
}
export default Idea;