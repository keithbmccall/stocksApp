import React from "react";
import classes from "./Tools.module.css";
import methods from "../../methods";
//
const NewsItem = props => {
  const { news } = props;
  const newsHeadline =
    news.headline.length > 35
      ? `${methods.textUnEncoder(news.headline).slice(0, 35)}...`
      : methods.textUnEncoder(news.headline);

  return (
    <div className={[classes.NewsTitle, "border-bottom"].join(" ")}>
      <span className={classes.NewsDate}>{news.datetime.slice(0, 10)}</span>
      <a href={news.url}>{newsHeadline}</a>
    </div>
  );
};
export default NewsItem;
