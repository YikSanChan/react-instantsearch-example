import React from "react";
import {
  ClearRefinements,
  CurrentRefinements,
  Hits,
  Pagination,
  RefinementList,
  SearchBox
} from "react-instantsearch-dom";
import Product from "./Product";

const Search = () => {
  return (
    <div className="container">
      <CurrentRefinements />
      <ClearRefinements />
      <SearchBox />
      <RefinementList attribute="category" />
      <Hits hitComponent={Product} />
      <Pagination />
    </div>
  );
};

export default Search;
