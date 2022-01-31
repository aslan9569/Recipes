import React, { useEffect } from "react";
import classes from "./categories.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../../../redux/ducks/categoriesReducer";
import Category from "./Category";
import ReactLoading from "react-loading";

function Categories(props) {
  const categories = useSelector((state) => state.categories.items);
  const dispatch = useDispatch();
  const loadCategory = useSelector((state) => state.categories.loadCategories);

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <div className={classes.container}>
      {loadCategory ? (
        <div>
          <ReactLoading
            type={"spin"}
            color={"#7729b7"}
            height={30}
            width={30}
          />
        </div>
      ) : (
        categories.map((category) => (
          <Category category={category} id={category.id} key={category.id} />
        ))
      )}
    </div>
  );
}

export default Categories