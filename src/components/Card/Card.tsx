

import React from 'react';
import "./Card.css";
import { CompanySearch } from '../../company';


interface Props {
  id: string;
  searchResult : CompanySearch;
}

const Card: React.FC<Props> = ({id, searchResult}: Props) : JSX.Element => {
  return (
    <div className="card">
      <img alt='img alt'></img>
      <div className="details">
        <h2>copany name :{searchResult.name} ({searchResult.symbol})</h2>
        <p>price . {searchResult.currency}</p>
        <p className='info'>{searchResult.exchangeShortName} - {searchResult.stockExchange}</p>
      </div>
    </div>
  );
}

export default Card

