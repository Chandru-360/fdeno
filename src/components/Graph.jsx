import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import MutualfundService from "../services/MutualfundService";

const Graph = () => {
  const [mutualfundArray, setMutualfundArray] = useState([]);

  const fetchAllmutualfunds = () => {
    console.log("fetch all mutual funds fired");
    MutualfundService.getAllmutualfunds().then((response) => {
      console.log("Response received from API", response.data);
      setMutualfundArray(response.data);
      console.log("State variable changed with response data");
    });
  };

  useEffect(() => {
    console.log("UseEffect fired..");
    fetchAllmutualfunds();
  }, []);

  const fundNames = mutualfundArray.map(mutualfund => mutualfund.fundName);
  const expectedReturns1y = mutualfundArray.map(mutualfund => mutualfund.expectedReturns1y);
  const expectedReturns3y = mutualfundArray.map(mutualfund => mutualfund.expectedReturns3y);
  const expectedReturns5y = mutualfundArray.map(mutualfund => mutualfund.expectedReturns5y);

  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: fundNames
    }
  };

  const series = [
    {
      name: "Expected Returns 1Y",
      data: expectedReturns1y
    },
    {
      name: "Expected Returns 3Y",
      data: expectedReturns3y
    },
    {
      name: "Expected Returns 5Y",
      data: expectedReturns5y
    }
  ];

  return (
    <div className="graphs">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="line" width="800" />
        </div>
      </div>
    </div>
  );
};

export default Graph;
