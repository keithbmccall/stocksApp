import React from "react";
import NewsItem from "./NewsItem";

const NewsFeed = props => {
  const renderNews = (news, key) => <NewsItem key={key} news={news} />;

  const newsFeed = props.news ? props.news.map(renderNews) : <div>No News</div>;
  return <div>{newsFeed}</div>;
};
export default NewsFeed;
