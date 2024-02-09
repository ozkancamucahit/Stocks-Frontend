import React, { useState } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState<string>("");
  const [SearchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [ServerError, setServerError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log("btn e :>> ", e);
  };

  const onClick = async (
    e: /*SyntheticEvent*/ React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    }
    else if (Array.isArray(result.data)){
      setSearchResult(result.data);
    }

    console.log('searchResult :>> ', SearchResult); 
  };

  return (
    <div className="App">
      <CardList searchResults={SearchResult}/>
      <Search search={search} handleChange={handleChange} onClick={onClick} />
      {ServerError && <h1>{ServerError}</h1>}
    </div>
  );
}

export default App;
