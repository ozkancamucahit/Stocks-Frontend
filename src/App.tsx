import React, { SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './components/Portfolio/ListPortfolio/ListPortfolio';

function App() {
  const [search, setSearch] = useState<string>("");
  const [SearchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [ServerError, setServerError] = useState<string>("");
  const [portfolioValues, setportfolioValues] = useState<string[]>([]);

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

  const onPortfolioCreate = (event : any) => {
    event.preventDefault();

    const exists = portfolioValues.find((value) => value === event.target[0].value);
    
    if(exists)
      return;

    const updatedPortfolio = [...portfolioValues, event.target[0].value];
    setportfolioValues(updatedPortfolio);

  };

  const onPortfolioDelete = ( e: any) => {
    e.preventDefault();

    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setportfolioValues(removed);
  };

  return (
    <div className="App">
      <ListPortfolio portfolioValues= {portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
      <CardList searchResults={SearchResult} onPortfolioCreate={onPortfolioCreate}/>
      <Search search={search} handleSearchChange={handleSearchChange} onSearchSubmit={onSearchSubmit} />
      {ServerError && <h1>{ServerError}</h1>}
    </div>
  );
}

export default App;
