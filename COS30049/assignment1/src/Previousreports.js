import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

function Previousreports() {
  const [reports, setReports] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulating fetching a list of reports 
    const dummyReports = [
      { id: 1, name: 'Report 1', dateUploaded: '2023-08-30' },
      { id: 2, name: 'Report 2', dateUploaded: '2023-08-29' },
      //More dummy reports can be added here
    ];

    setReports(dummyReports);
  }, []); // Empty dependency array to run this effect once when the component mounts

  // Function to filter reports based on the search term
  const filteredReports = reports.filter((report) =>
    report.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <div>
        <div>
          <label htmlFor="searchBox">Search by Report Name:</label>
          <input
            type="text"
            id="searchBox"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Name of Report</th>
              <th>Date Uploaded</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report) => (
              <tr key={report.id}>
                <td>{report.name}</td>
                <td>{report.dateUploaded}</td>
                <td>
                  <button onClick={() => handleDownload(report.id)}>Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Simulated function for downloading a report
function handleDownload(reportId) {
  alert(`Downloading report with ID ${reportId}`);
}

export default Previousreports;
