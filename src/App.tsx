import React, { SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState<string>("");
  const [SearchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [ServerError, setServerError] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log("btn e :>> ", e);
  };

  const onSearchSubmit = async (
    e: SyntheticEvent 
  ) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    }
    else if (Array.isArray(result.data)){
      setSearchResult(result.data);
    }

    console.log('searchResult :>> ', SearchResult); 
  };

  const onPortfolioCreate = (event : SyntheticEvent) => {
    event.preventDefault();
    console.log('event :>> ', event);
  };

  return (
    <div className="App">
      <CardList searchResults={SearchResult} onPortfolioCreate={onPortfolioCreate}/>
      <Search search={search} handleSearchChange={handleSearchChange} onSearchSubmit={onSearchSubmit} />
      {ServerError && <h1>{ServerError}</h1>}
    </div>
  );
}

export default App;
