import React, { useState } from "react";
import "./SearchBar.css";

const sortByOptions = {
  Newest: "newest",
  Oldest: "oldest",
  Relevance: "relevance"
};

// component containing the search bar
const SearchBar = props => {
  const { searchGuardian } = props;

  const [searchTerm, setSearchTerm] = useState("");
  const [date, setDate] = useState("");
  const [sortBy, setSortBy] = useState("relevance");

  const getSortByClass = sortingOption => {
    if (sortBy == sortingOption) {
      return "active";
    } else {
      return "";
    }
  };

  const handleSortByChange = option => {
    setSearchTerm(option);
  };

  const handleTermChange = evt => {
    searchGuardian(evt.target.value, date, sortBy);
  };

  const handleDateChange = evt => {
    setDate(evt.target.value);
  };

  const handleSearch = evt => {
    searchGuardian(searchTerm, date, sortBy);
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map(option => {
      let sortByOptionValue = sortByOptions[option];
      return (
        <li
          key={sortByOptionValue}
          className={getSortByClass(sortByOptionValue)}
          onClick={handleSortByChange(sortByOptionValue)}
        >
          {option}
        </li>
      );
    });
  };

  return (
    <div className="SearchBar">
      {<div className="SearchBar-sort-options"></div>}
      <div className="SearchBar-fields">
        <input
          placeholder="Begin typing to search"
          onChange={handleTermChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
