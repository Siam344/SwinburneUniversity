import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <img src="https://images.unsplash.com/photo-1642239817356-9dffb1bcc156" alt='background'/>
      <div className="about-us-text">
        <h3>About Us</h3>
      </div>
      <div className="homepage-text">
        <p>NFTs, or Non-Fungible Tokens, are a form of digital asset that represent ownership of a unique item, often digital art. They have gained significant attention for their use in the art world, but they have applications in various other fields as well.</p>
      </div>
    </div>
  );
}

export default HomePage;
