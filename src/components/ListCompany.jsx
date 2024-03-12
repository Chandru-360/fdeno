import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CompanyService from "../services/CompanyService";

export const ListCompany = () => {
  const [funds, setFunds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const filteredFunds = funds.filter(company =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };

  const fetchAllcompany = () => {
    CompanyService.getAllFunds().then((response) => {
      setFunds(response.data);
    });
  };

  const deleteCompany = (id) => {
    let confirmDelete = window.confirm("Are you sure to delete this company?");
    if (confirmDelete) {
      CompanyService.deleteCompany(id)
        .then((response) => {
          fetchAllcompany();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    fetchAllcompany();
  }, []);

  return (
    <div className="container">
      <div className="col-md-12 offset-md-1 border rounded p-4 mt-2 shadow">
        <h2 className="text-center">Company Data</h2>
        <div>
          <Link to="/addcompany" className="btn btn-primary mb-3">
            Add New Company{" "}
          </Link>
        </div>
        <div className="searchbar-list">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search by Company Name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <p>Total Companies: {filteredFunds.length}</p>
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Type</th>
              <th>Address</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredFunds.map((company, key) => (
              <tr key={key}>
                <td>{company.id}</td>
                <td>{company.name}</td>
                <td>{company.fundtype}</td>
                <td>{company.address}</td>
                <td>{company.user.email}</td>
                <td>{company.contact}</td>
                <td>
                  <Link to={`/updatecompany/${company.id}`} className="btn btn-success">
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteCompany(company.id)}
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
