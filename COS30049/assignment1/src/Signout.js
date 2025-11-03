import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signout({ handleSignOut }) {
  const navigate = useNavigate();

  const handleSignOutClick = () => {
    handleSignOut(); // Call the handleSignOut function passed as a prop to set authenticated to false
    navigate('/login'); //// Navigate to the "/login" route after signing out
  };

  return (
    <div>
      <h1>Sign Out</h1>
      <p>Are you sure you want to sign out?</p>
      <button onClick={handleSignOutClick}>Sign Out</button> {/* Trigger the sign-out process on button click */}
    </div>
    
  );
}

export default Signout; 
