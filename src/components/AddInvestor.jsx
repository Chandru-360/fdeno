import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import InvestorService from "../services/InvestorService";

const AddInvestor = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [dob, setDob] = useState("");
  const [pancardnumber, setPancardnumber] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [accountnumber, setAccountnumber] = useState("");
  const [ifsccode, setIfsccode] = useState("");
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const changeTitle = () => {
    if (id) {
      console.log("returned title update investor,Id value from url:", id);
      return <h2 className="text-center">UPDATE INVESTOR</h2>;
    } else {
      console.log("returned title add investor");
      return <h2 className="text-center">ADD INVESTOR</h2>;
    }
  };

  useEffect(() => {
    console.log("useeffect triggered..");
    console.log("id value received from url usign useParams()", id);
    if (id) {
      InvestorService.getInvestorById(id)
        .then((response) => {
          console.log(
            "Data received from getbyId api ",
            JSON.stringify(response.data)
          );
          const investorData = response.data;
          setFirstName(investorData.firstname);
          setLastName(investorData.lastname);
          setEmail(investorData.email);
          setCity(investorData.city);
          setDob(investorData.dob);
          setGender(investorData.gender);
          setPancardnumber(investorData.pancardnumber);
          setAccountnumber(investorData.accountnumber);
          setIfsccode(investorData.ifsccode);
          setContact(investorData.contact);
          setUsername(investorData.user.username);
          setPassword(investorData.user.password);
          console.log("state variable changed..");
        })
        .catch((err) => {
          console.log("err from get api", err);
        });
    }
  }, [id]);

  const saveOrUpdateInvestor = (e) => {
    e.preventDefault();
    const user = { username, password, email };
    const investor = {
      firstname,
      lastname,
      email,
      city,
      dob,
      gender,
      pancardnumber,
      accountnumber,
      ifsccode,
      user,
    };
    console.log(investor);
    console.log("investor object received from :", investor);
    if (id) {
      InvestorService.updateInvestor(id, investor)
        .then((response) => {
          console.log(
            "Response received from save api..",
            JSON.stringify(response.data)
          );
          navigate("/investors");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      InvestorService.addInvestor(investor)
        .then((response) => {
          console.log(
            "Response received from save api..",
            JSON.stringify(response.data)
          );
        })
        .catch((err) => {
          console.log(err);
        });
      navigate("/investors");
    }
  };

  return (
    <div>
      {console.log("App rendered...")}
      <div className="container">
        <div className="card col-md-6 offset-md-3">
          {changeTitle()}
          <div className="card-body">
            <form>
              {/* Firstname text box */}
              <div className="form-group mb-2">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  name="cfname"
                  value={firstname}
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              {/* lastname text box */}
              <div className="form-group mb-2">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  name="clname"
                  value={lastname}
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              {/* email box */}
              <div className="form-group mb-2">
                <label className="form-label">Investor Email Id</label>
                <input
                  type="email"
                  placeholder="Enter Investor Email id"
                  name="cemail"
                  value={email}
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* city type */}
              <div className="form-group mb-2">
                <label className="form-label">City</label>
                <input
                  type="text"
                  placeholder="Enter City"
                  name="cciity"
                  value={city}
                  className="form-control"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              {/* contact type */}
              <div className="form-group mb-2">
                <label className="form-label">Contact</label>
                <input
                  type="text"
                  placeholder="Enter Contact Number"
                  name="ccontact"
                  value={contact}
                  className="form-control"
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>

              {/* Dob type */}
              <div className="form-group mb-2">
                <label className="form-label">Date of birth</label>
                <input
                  type="text"
                  placeholder="Enter Date of birth"
                  name="cdob"
                  value={dob}
                  className="form-control"
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>

              {/* pancardnumber type */}
              <div className="form-group mb-2">
                <label className="form-label">PAN card number</label>
                <input
                  type="text"
                  placeholder="Enter pancard number"
                  name="cpancard"
                  value={pancardnumber}
                  className="form-control"
                  onChange={(e) => setPancardnumber(e.target.value)}
                />
              </div>

              {/* Gender type */}
              <div className="form-group mb-2">
                <label className="form-label">Gender</label>
                <input
                  type="text"
                  placeholder="Enter Gender"
                  name="igender"
                  value={gender}
                  className="form-control"
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>

              {/* accountnumber type */}
              <div className="form-group mb-2">
                <label className="form-label">Account Number</label>
                <input
                  type="text"
                  placeholder="Enter Account Number"
                  name="caacno"
                  value={accountnumber}
                  className="form-control"
                  onChange={(e) => setAccountnumber(e.target.value)}
                />
              </div>

              {/* Ifsccode type */}
              <div className="form-group mb-2">
                <label className="form-label">IFSC code</label>
                <input
                  type="text"
                  placeholder="Enter IFSC code"
                  name="ccontact"
                  value={ifsccode}
                  className="form-control"
                  onChange={(e) => setIfsccode(e.target.value)}
                />
              </div>

              {/* user details */}
              {/* username textbox */}
              {!id && (
                <div>
                  <div className="form-group mb-2">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      placeholder="Enter username"
                      name="username"
                      value={username}
                      className="form-control"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  {/* password textbox */}
                  <div className="form-group mb-2">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      value={password}
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              )}
              {/* submit button */}

              <button
                onClick={(e) => saveOrUpdateInvestor(e)}
                className="btn btn-success"
              >
                Submit
              </button>
              <Link to="/" className="btn btn-danger float-end">
                cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInvestor;
