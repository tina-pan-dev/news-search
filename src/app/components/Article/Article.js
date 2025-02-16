import React from "react";
import "./Article.css";

// component for individual articles retrieved from the API
const Article = props => {
  const { article } = props

  return (
    <div className="Article">
      <div className="image-container">
        <img src={article.imageSrc} alt="" />
      </div>
      <h2>
        <a href={article.link} target="_blank">
          {article.title}
        </a>
      </h2>
      <div className="Article-information">
        <div className="Article-publication-date">
          <p>Date published: {article.publication_date}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
