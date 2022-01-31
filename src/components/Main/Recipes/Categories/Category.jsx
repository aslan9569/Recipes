import React from "react";
import classes from "./categories.module.css";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

function Category(props) {
  return (
    <div>
      <Link to={`/recipes/${props.id}`}>
        <div className={classes.category}>{props.category.category}</div>
      </Link>
    </div>
  );
}
Category.propTypes = {
  category: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default Category;
