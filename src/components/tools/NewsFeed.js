import React from "react";
import NewsItem from "./NewsItem";
import SmallHeading from "./SmallHeading";

const NewsFeed = props => {
  const renderNews = (news, key) => <NewsItem key={key} news={news} />;

  const newsFeed = props.news ? (
    props.news.map(renderNews)
  ) : (
    <div>No News!</div>
  );
  return (
    <div >
      <SmallHeading>News</SmallHeading>
      {newsFeed}
    </div>
  );
};
export default NewsFeed;
