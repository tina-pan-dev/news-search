// component containing the section header
import React from "react";
import "./Section.css";
import ArticleList from "../ArticleList/ArticleList";

const Section = (props) => {
  const { articles, sections } = props;

  return (
    <div className="Section">
      {sections.map(section => {
        return (
          <div key={section}>
            <h1>{section.toLowerCase()}</h1>
            <ArticleList articles={articles} section={section}></ArticleList>
          </div>
        );
      })}
    </div>
  );
};

export default Section;
