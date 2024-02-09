

import React from 'react';
import "./Card.css";


interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card = ({companyName, ticker, price}: Props) => {
  return (
    <div className="card">
      <img alt='img alt'></img>
      <div className="details">
        <h2>copany name :{companyName} ({ticker})</h2>
        <p>price . {price}</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, quam.</p>
      </div>
    </div>
  );
}

export default Card

