import React, { useEffect, useState } from 'react'
import InvestorService from '../services/InvestorService'
import { Link, useNavigate } from 'react-router-dom'


export const Listinvestors = () => {
    const [investorArray,setInvestorArray]=useState([])
    const navigate=useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const filteredinvestors = investorArray.filter(
      (investor) =>
        investor.firstname.toLowerCase().includes(searchQuery.toLowerCase())||
        investor.lastname.toLowerCase().includes(searchQuery.toLowerCase())
    );



    const fetchAllinvestors = () => {
        console.log("fetch all investor fired");
        InvestorService.getAllinvestors().then((response) => {
          console.log("Response received from API", response.data);
          setInvestorArray(response.data);
          console.log("State variable changed with response data");
        });
      };

      const deleteInvestor = (id) => {
        let confirmDelete = window.confirm("Are you sure to delete this investor?");
        console.log("delete handler fired. ID value received", id);
        if (confirmDelete) {
          InvestorService.deleteInvestor(id)
            .then((response) => {
              console.log("Response received from delete api..", JSON.stringify(response.data));
              // After successful deletion, fetch all companies again
              fetchAllinvestors();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };
      useEffect(() => {
        console.log("UseEffect fired..");
        fetchAllinvestors();
      }, []);
    //const [state variable,function that canListinvestors chnage the state variable]
  return (
    <div className='container'>
        {console.log("application render")}
      <h2 className='text-center'>Investor Data</h2>
      <Link to="/addinvestor" className="btn btn-primary mb-3">
        Add New Investor{" "}
      </Link>
      <div className='searchbar-list'>
      <input
            className="form-control me-2"
            type="search"
            placeholder="Search by MutualFund Name"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
      </div>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
            <tr>
            <th>Investor Id</th>
            <th>First Name</th>
            <th>Last name</th>
            <th>Email Id</th>
            <th>City</th>
            <th>DateOfBirth</th>
            <th>pancardNumber</th>
            <th>Gender</th>
            <th>contactNumber</th>
            <th>accountNumber</th>
            <th>ifscCode</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                filteredinvestors.map((investor,key)=><tr key={key}>
                    <td>{investor.id}</td>
                    <td>{investor.firstname}</td>
                    <td>{investor.lastname}</td>
                    <td>{investor.email}</td>
                    <td>{investor.city}</td>
                    <td>{investor.dob}</td>
                    <td>{investor.pancardNumber}</td>
                    <td>{investor.gender}</td>
                    <td>{investor.contactNumber}</td>
                    <td>{investor.accountNumber}</td>
                    <td>{investor.ifscCode}</td>
                    <td>
                <Link to={`/updateinvestor/${investor.id}`} className="btn btn-success ">
                  Update
                </Link>
                <button
                  className=" btn btn-danger "
                  onClick={() => deleteInvestor(investor.id)}
                >
                  Delete
                </button>

              </td>
                </tr>)
            }
        </tbody>
      </table>
    </div>
  )
}

export default Listinvestors