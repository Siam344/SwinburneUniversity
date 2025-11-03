import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import HomePage from './HomePage';
import MarketPlace from './Marketplace';
import SignOut from './Signout';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [invalidLogin, setInvalidLogin] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setInvalidLogin(false);
    } else {
      setInvalidLogin(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setInvalidLogin(false);
  };

  return (
    <Router>
      <div className="App">
        <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />} />
          <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/marketplace" element={isLoggedIn ? <MarketPlace /> : <Navigate to="/login" />} />
          <Route path="/signout" element={isLoggedIn ? <SignOut onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/home" />
              ) : (
                <div className="login">
                  <h2>Login</h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const usernameValue = e.target.username.value;
                      const passwordValue = e.target.password.value;
                      handleLogin(usernameValue, passwordValue);
                    }}
                  >
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit">Login</button>
                  </form>
                  {invalidLogin && <p>Invalid Password</p>}
                </div>
              )
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
