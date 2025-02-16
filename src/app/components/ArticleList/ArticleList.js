// component used to organise the articles into sections and display them in a flexbox
import React from "react";
import "./ArticleList.css";
import Article from "../Article/Article";

const ArticleList = props => {
  const { articles, section } = props;

  const renderArticles = () => {
    return articles.map(article => {
      if (article.section === section) {
        return <Article article={article} key={article.id} />;
      }
    });
  };

  return <div className="ArticleList">{renderArticles()}</div>;
};

export default ArticleList;
