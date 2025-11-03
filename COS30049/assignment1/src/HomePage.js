import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import NavBar from './NavBar'; // Import the NavBar component
import './HomePage.css'; // Import the CSS file

function HomePage() {
  // Define state to store the selected file
  const [selectedFile, setSelectedFile] = useState(null);
  
  // Initialize the navigate function for routing
  const navigate = useNavigate(); 

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith('.sol')) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
      alert('Please select a valid .sol file.'); // Show an alert for invalid file format
    }
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (selectedFile) {
      // Process the selected .sol file (your logic here)
      alert(`You selected file: ${selectedFile.name}`);

      // Navigate to the "Report.js" page using the navigate function
      navigate('/report');
    } else {
      alert('Please select a .sol file before submitting.'); // Show an alert for missing file
    }
  };

  return (
    <div className="home-page">
      <NavBar /> {/* Render the NavBar component */}
      <h1>About us</h1>
      <p className="trust-text">
        E.Sol is our name. We provide a complete solution to check your solidity code. We have 100% client satisfaction because we prioritize transparency, security, and quality. We provide clear contact information, a comprehensive privacy policy, and secure transactions. Our site features testimonials from satisfied users and complies with data protection regulations. We're committed to providing trustworthy content and responsive support.
      </p>
      <div className="file-upload">
        <p>Please drop your Solidity file:</p>
        {/* Input element for selecting a .sol file, with an onChange event handler */}
        <input type="file" accept=".sol" onChange={handleFileChange} />
        {/* Button to submit the form, with an onClick event handler */}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default HomePage;
