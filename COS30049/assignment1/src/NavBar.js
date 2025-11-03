import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
        
        <ul>
         {/* Create navigation links using the Link component */}
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/report">Report</Link>
          </li>
          <li>
            <Link to="/preports">Previous Reports</Link>
          </li>
          <li>
            <Link to="/signout">Signout</Link>
          </li>
        </ul>
 
    </nav>
  );
}

export default NavBar;
