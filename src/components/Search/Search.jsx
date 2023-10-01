import React from "react";
import "./Search.scss";
import searchIcon from "../../assets/icons/search.svg";

export const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Serach..." />
      <img src={searchIcon} alt="A Search Icon" />
    </div>
  );
};
