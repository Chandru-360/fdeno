import React from 'react';
import './CompanyStatistics.css'; // Import CSS file for styling

const CompanyStatistics = () => {
    
  // Dummy data for demonstration
  const data = {
    numberOfCompanies: 101,
    numberOfThematicFunds: 25,
    numberOfMutualFunds: 50,
    numberOfInvestors: 100,
  };

  return (
    <div className="table-container">
      <h3>Company Statistics</h3>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Number of Companies</td>
            <td>{data.numberOfCompanies}</td>
          </tr>
          <tr>
            <td>Number of Thematic Funds</td>
            <td>{data.numberOfThematicFunds}</td>
          </tr>
          <tr>
            <td>Number of Mutual Funds</td>
            <td>{data.numberOfMutualFunds}</td>
          </tr>
          <tr>
            <td>Number of Investors</td>
            <td>{data.numberOfInvestors}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompanyStatistics;
