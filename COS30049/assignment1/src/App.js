import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import Report from './Report';
import Signout from './Signout';
import Previousreports from './Previousreports';
import './App.css';


function App() {
  const [username, setUsername] = useState(''); // State for the username
  const [password, setPassword] = useState(''); // State for the password
  const [authenticated, setAuthenticated] = useState(false); // State for user authentication

  const handleLogin = () => { // Function to handle user login
    //signin
    if (username === 'root' && password === 'root') { 
      setAuthenticated(true);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  const handleSignOut = () => { // Function to handle user sign-out
    setAuthenticated(false); // Set authenticated to false when signing out
  };

  return (
    <Router> {/* Use the Router component for routing */}
      <Routes>
        {/* Route for the login page */}
        <Route //  Defines routes */}
          path="/login"
          element={
            !authenticated ? (
              <div className="App">
                <h1>Login</h1>
                <div>
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button onClick={handleLogin}>Login</button>
              </div>
            ) : (
              // Redirect to the homepage if authenticated
              <Navigate to="/home" replace />
            )
          }
        />
        {/* Route for the homepage */}
        <Route path="/home" element={<HomePage />} />
        
        {/* Route for the sign-out page */}
        <Route
          path="/signout"
          element={<Signout handleSignOut={handleSignOut} />} // Pass the handleSignOut function to Signout
        />
        
        {/* Route for the report page */}
        <Route path="/report" element={<Report />} />

         {/* Route for the previous report page */}
        <Route path="/preports" element={<Previousreports />} />
        
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App; 
