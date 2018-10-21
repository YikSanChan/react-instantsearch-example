import React from "react";
import { InstantSearch } from "react-instantsearch-dom";
import Search from "./Search";

const App = () => (
  <InstantSearch
    appId="latency"
    apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
    indexName="bestbuy"
  >
    <Search />
  </InstantSearch>
);

export default App;
