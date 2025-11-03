import React from 'react';
import './MarketPlace.css';

function MarketPlace() {
  const items = [
    {
      name: 'LiteCoin',
      image: 'https://images.unsplash.com/photo-1641959928811-9ebfd8f214c0',
      price: '0.2 ETH'
    },
    {
      name: 'ShibaInu',
      image: 'https://images.unsplash.com/photo-1642388538891-38b2d14e750e',
      price: '0.1 ETH'
    },
    {
      name: 'XRPUSDT',
      image: 'https://images.unsplash.com/photo-1656523864170-d4a1b4a263b5',
      price: '0.3 ETH'
    },
    {
      name: 'CyberUSDT',
      image: 'https://images.unsplash.com/photo-1618060932014-4deda4932554',
      price: '0.4 ETH'
    },
    {
      name: 'TezosCoin',
      image: 'https://images.unsplash.com/photo-1639468599871-184271aa14fb',
      price: '0.2 ETH'
    },
    {
      name: 'Ethereum',
      image: 'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae',
      price: '1.0 ETH'
    },
  ];

  return (
    <div className="marketplace">
      <div className="items-container">
        {items.map((item, index) => (
          <div key={index} className="item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketPlace;
