import React from 'react';
import classes from './news.module.css';

function NewsCard (props) {
  return (
    <div className={classes.newsCard}>
    <div className={classes.text}>
      <div>{props.news.text}</div>
      <a href={props.news.site}>Читать подробнее...</a>
    </div>
      <div className={classes.img}>
        <img src={props.news.img} alt=""/>
      </div>
    </div>
  )
}

export default NewsCard