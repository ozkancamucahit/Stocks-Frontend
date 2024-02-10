

import React, { SyntheticEvent } from 'react';
import "./Card.css";
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';


interface Props {
  id: string;
  searchResult : CompanySearch;
  onPortfolioCreate : (e : SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({id, searchResult, onPortfolioCreate}: Props) : JSX.Element => {
  return (
    <div className="card">
      <img alt='img alt'></img>
      <div className="details">
        <h2>copany name :{searchResult.name} ({searchResult.symbol})</h2>
        <p>price . {searchResult.currency}</p>
        <p className='info'>{searchResult.exchangeShortName} - {searchResult.stockExchange}</p>
        <AddPortfolio onPortfolioCreate={onPortfolioCreate} 
        symbol= {searchResult.symbol}/>
      </div>
    </div>
  );
}

export default Card

