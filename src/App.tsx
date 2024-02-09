import React from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <CardList />
      <Search />
    </div>
  );
}

export default App;
