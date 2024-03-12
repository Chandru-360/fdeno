import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import'./ListMutualFunds.css'
import MutualfundService from "../services/MutualfundService";

export const ListMutualFunds = () => {
  const [mutualfundArray, setMutualfundArray] = useState([]);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [riskFactorFilter, setRiskFactorFilter] = useState("");

  const filteredMutualfunds = mutualfundArray.filter(
    (mutualfund) =>
      mutualfund.fundName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (categoryFilter === "" ||
        mutualfund.category.toLowerCase() === categoryFilter.toLowerCase()) &&
      (riskFactorFilter === "" ||
        mutualfund.riskFactor.toLowerCase() === riskFactorFilter.toLowerCase())
  );

  const fetchAllmutualfunds = () => {
    console.log("fetch all mutual funds fired");
    MutualfundService.getAllmutualfunds().then((response) => {
      console.log("Response received from API", response.data);
      setMutualfundArray(response.data);
      console.log("State variable changed with response data");
    });
  };

  const deleteMutualfund = (id) => {
    let confirmDelete = window.confirm(
      "Are you sure to delete this mutualfund?"
    );
    console.log("delete handler fired. ID value received", id);
    if (confirmDelete) {
      MutualfundService.deleteMutualfund(id)
        .then((response) => {
          console.log(
            "Response received from delete api..",
            JSON.stringify(response.data)
          );
          // After successful deletion, fetch all companies again
          fetchAllmutualfunds();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    console.log("UseEffect fired..");
    fetchAllmutualfunds();
  }, []);

  return (
    <div className="container">
      {console.log("application render")}
      <div className="col-md-12 offset-md-1 border rounded p-4 mt-2 shadow">
        <h2 className="text-center">Mutual Fund Data</h2>
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
        <div className="Filtercat">
          <select
            className="form-select"
            aria-label="Filter by Category"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="LOW_CAP">Low Cap</option>
            <option value="HIGH_CAP">High Cap</option>
            <option value="MID_CAP">Mid Cap</option>
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
        <p><strong>Total Companies:</strong> {filteredMutualfunds.length}</p>
        <table className="table table-bordered table-striped">
          <thead>
            <th>FundName</th>
            <th>category</th>
            <th>Fund Size</th>
            <th>Risk Factor</th>
            <th>Return Factor</th>
            <th>Expected Returns 1Y</th>
            <th>Expected Returns 3Y</th>
            <th>Expected Returns 5Y</th>
            <th>Locking Period</th>
            <th>Min Invenstment Amount</th>
            <th>Nav Price</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {filteredMutualfunds.map((mutualfund, key) => (
              <tr key={key}>
                <td>{mutualfund.fundName}</td>
                <td>{mutualfund.category}</td>
                <td>{mutualfund.fundSize}</td>
                <td>{mutualfund.riskFactor}</td>
                <td>{mutualfund.returnFactor}</td>
                <td>{mutualfund.expectedReturns1y}</td>
                <td>{mutualfund.expectedReturns3y}</td>
                <td>{mutualfund.expectedReturns5y}</td>
                <td>{mutualfund.lockingPeriod}</td>
                <td>{mutualfund.minInvenstmentAmount}</td>
                <td>{mutualfund.navPrice}</td>
                <td>
                  <Link
                    to={`/updateMutualfund/${mutualfund.id}`}
                    className="btn btn-success"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteMutualfund(mutualfund.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListMutualFunds;
