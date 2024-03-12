import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import thematicfundService from "../services/thematicfundService";


const AddThematicfund = () => {
  const [fundName, setFundName] = useState("");
  const [category, setCategory] = useState("");
  const [fundSize, setFundSize] = useState("");
  const [riskFactor, setRiskFactor] = useState("");
  const [returnFactor, setReturnFactor] = useState("");
  const [expectedReturns, setExpectedReturns] = useState(""); // State for username
  const [lockingPeriod, setLockingPeriod] = useState("");
  const [minInvenstmentAmount, setMinInvenstmentAmount] = useState("");
  const [navPrice, setNavPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const changeTitle = () => {
    if (id) {
      console.log("returned title update thematicfund,Id value from url:", id);
      return <h2 className="text-center">Update Thematic Fund</h2>;
    } else {
      console.log("returned title add thematicfund");
      return <h2 className="text-center">Add Thematicfund</h2>;
    }
  };

  useEffect(() => {
    console.log("useeffect triggered..");
    console.log("id value received from url usign useParams()", id);
    if (id) {
      thematicfundService.getthematicfundById(id)
        .then((response) => {
          console.log(
            "Data received from getbyId api ",
            JSON.stringify(response.data)
          );
          const thematicfundData = response.data;
          setFundName(thematicfundData.fundName);
          setCategory(thematicfundData.category);
          setFundSize(thematicfundData.fundSize);
          setRiskFactor(thematicfundData.riskFactor);
          setReturnFactor(thematicfundData.returnFactor);
          setExpectedReturns(thematicfundData.expectedReturns);
          setLockingPeriod(thematicfundData.lockingPeriod);
          setMinInvenstmentAmount(thematicfundData.minInvenstmentAmount);
          setNavPrice(thematicfundData.navPrice);
          console.log("state variable changed..");
        })
        .catch((err) => {
          console.log("err from get api", err);
        });
    }
  }, [id]);
  const saveOrUpdateThematicfund = (e) => {
    e.preventDefault();
    const thematicfund = {fundName,category,fundSize,riskFactor,returnFactor,expectedReturns,lockingPeriod,minInvenstmentAmount,navPrice};

    console.log(thematicfund);
    console.log("mutualfund object received from :",thematicfund);
    if (id) {
      thematicfundService.updatethematicfund(id,thematicfund)
        .then((response) => {
          console.log(
            "Response received from save api..",
            JSON.stringify(response.data)
          );
          navigate('/thematicfunds')
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      thematicfundService.addthematicfund(id,thematicfund)
        .then((response) => {
          console.log(
            "Response received from save api..",
            JSON.stringify(response.data)
          );
        })
        .catch((err) => {
          console.log(err);
        });
        navigate('/mutualfunds')
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
              {/* fundname text box */}
              <div className="form-group mb-2">
                <label className="form-label">Fund Name</label>
                <input
                  type="text"
                  placeholder="Enter Fund name"
                  name="fname"
                  value={fundName}
                  className="form-control"
                  onChange={(e) => setFundName(e.target.value)}
                />
              </div>

              {/* categeory box */}
              <div className="form-group mb-2">
                <label className="form-label">Category</label>
                <input
                  type="text"
                  placeholder="Enter Category"
                  name="ccat"
                  value={category}
                  className="form-control"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              {/* fundSize box */}
              <div className="form-group mb-2">
                <label className="form-label">FundSize</label>
                <input
                  type="text"
                  placeholder="Enter fundSize"
                  name="cfndsz"
                  value={fundSize}
                  className="form-control"
                  onChange={(e) => setFundSize(e.target.value)}
                />
              </div>
               {/* riskFactor box */}
               <div className="form-group mb-2">
                <label className="form-label">RiskFactor</label>
                <input
                  type="text"
                  placeholder="Enter riskFactor"
                  name="crf"
                  value={riskFactor}
                  className="form-control"
                  onChange={(e) => setRiskFactor(e.target.value)}
                />
              </div>
              {/* returnFactor box */}
              <div className="form-group mb-2">
                <label className="form-label">Return Factor</label>
                <input
                  type="text"
                  placeholder="Enter return Factor"
                  name="crf"
                  value={returnFactor}
                  className="form-control"
                  onChange={(e) => setReturnFactor(e.target.value)}
                />
              </div>

               {/* expectedReturns box */}
               <div className="form-group mb-2">
                <label className="form-label">Expected Returns</label>
                <input
                  type="text"
                  placeholder="Enter expected Returns"
                  name="cer"
                  value={expectedReturns}
                  className="form-control"
                  onChange={(e) => setExpectedReturns(e.target.value)}
                />
              </div>

              {/* lockingPeriod box */}
              <div className="form-group mb-2">
                <label className="form-label">Locking Period in years</label>
                <input
                  type="text"
                  placeholder="Enter Locking Period"
                  name="clp"
                  value={lockingPeriod}
                  className="form-control"
                  onChange={(e) => setLockingPeriod(e.target.value)}
                />
              </div>

              {/* minInvenstmentAmount box */}
              <div className="form-group mb-2">
                <label className="form-label">Min Invenstment Amount</label>
                <input
                  type="text"
                  placeholder="Enter Minimum Invenstment Amount"
                  name="cmia"
                  value={minInvenstmentAmount}
                  className="form-control"
                  onChange={(e) => setMinInvenstmentAmount(e.target.value)}
                />
              </div>

              {/* NavPrice box */}
              <div className="form-group mb-2">
                <label className="form-label">Nav Price</label>
                <input
                  type="text"
                  placeholder="Enter Nav Price"
                  name="cnp"
                  value={navPrice}
                  className="form-control"
                  onChange={(e) => setNavPrice(e.target.value)}
                />
              </div>

               {/* submit button */}

               <button
                onClick={(e) => saveOrUpdateThematicfund(e)}
                className="btn btn-success"
              >
                Submit
              </button>
              <Link to="/thematicfunds" className="btn btn-danger float-end">
                cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddThematicfund;
