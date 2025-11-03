import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import PaidIcon from '@mui/icons-material/Paid';  // Import the PaidIcon

function NavBar({ isLoggedIn, onLogout }) {
  return (
    <div className="nav-bar">
      <div className="nav-left">
        <Link to="/home"> <PaidIcon style={{ fontSize: 30 }} />NFT MARKETPLACE</Link> {/* Include the PaidIcon next to the title */}
        <Link to="/home">HOME</Link>
        <Link to="/marketplace">MARKETPLACE</Link>
      </div>
      <div className="nav-right">
        {isLoggedIn ? <button onClick={onLogout}>Sign Out</button> : null}
      </div>
    </div>
  );
}

export default NavBar;
