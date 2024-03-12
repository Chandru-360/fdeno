import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import thematicfundService from "../services/thematicfundService";
import'./ListThematicFunds.css'
export const ListThematicFunds = () => {
  const [thematicfundArray, setThematicfundArray] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [riskFactorFilter, setRiskFactorFilter] = useState("");
  const navigate = useNavigate();

  const filteredThematicfunds = thematicfundArray.filter(
    (thematicfund) =>
    thematicfund.fundName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (categoryFilter === "" ||
      thematicfund.category.toLowerCase() === categoryFilter.toLowerCase()) &&
      (riskFactorFilter === "" ||
      thematicfund.riskFactor.toLowerCase() === riskFactorFilter.toLowerCase())
  );

  const fetchAllthematicfunds = () => {
    console.log("fetch all thematic funds fired");
    thematicfundService.getAllthematicfunds().then((response) => {
      console.log("Response received from API", response.data);
      setThematicfundArray(response.data);
      console.log("State variable changed with response data");
    });
  };

  const deletethematicfund = (id) => {
    let confirmDelete = window.confirm(
      "Are you sure to delete this thematicfund?"
    );
    console.log("delete handler fired. ID value received", id);
    if (confirmDelete) {
      thematicfundService
        .deletethematicfund(id)
        .then((response) => {
          console.log(
            "Response received from delete api..",
            JSON.stringify(response.data)
          );
          // After successful deletion, fetch all companies again
          fetchAllthematicfunds();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    console.log("UseEffect fired..");
    fetchAllthematicfunds();
  }, []);
  return (
    <div className="container">
      <h2 className="text-center">THEMATIC FUNDS LIST</h2>
      {console.log("application render")}
      <div className="searchbar-list">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search by MutualFund Name"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

<div className="filters">
        <div className="Filterscat">
        <select
            className="form-select"
            aria-label="Filter by Category"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="LOGISTICS">Logistics</option>
            <option value="DIGITAL_INDIA">Digital India</option>
            <option value="HEALTHCARE">Health Care</option>
          </select>
        </div>
        <div className="filterrf">
          <select
            className="form-select"
            aria-label="Filter by Risk Factor"
            value={riskFactorFilter}
            onChange={(e) => setRiskFactorFilter(e.target.value)}
          >
            <option value="">All Risk Factors</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      </div>
      
      
      <p>Total Companies: {filteredThematicfunds.length}</p>

      <table className="table table-bordered columns-striped">
        <thead className="head">
          <th>FundName</th>
          <th>category</th>
          <th>Fund Size</th>
          <th>Risk Factor</th>
          <th>Return Factor</th>
          <th>Expected Returns 1y</th>
          <th>Expected Returns 3y</th>
          <th>Expected Returns 5y</th>
          <th>Locking Period</th>
          <th>Min Invenstment Amount</th>
          <th>Nav Price</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {filteredThematicfunds.map((thematicfund, key) => (
            <tr key={key}>
              <td>{thematicfund.fundName}</td>
              <td>{thematicfund.category}</td>
              <td>{thematicfund.fundSize}</td>
              <td>{thematicfund.riskFactor}</td>
              <td>{thematicfund.returnFactor}</td>
              <td>{thematicfund.expectedReturns1y}</td>
              <td>{thematicfund.expectedReturns3y}</td>
              <td>{thematicfund.expectedReturns5y}</td>
              <td>{thematicfund.lockingPeriod}</td>
              <td>{thematicfund.minInvenstmentAmount}</td>
              <td>{thematicfund.navPrice}</td>
              <td>
                <Link
                  to={`/updatethematicfund/${thematicfund.id}`}
                  className="btn btn-success"
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deletethematicfund(thematicfund.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListThematicFunds;
