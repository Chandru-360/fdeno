import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import thematicfundService from "../services/thematicfundService";


const Graph1 = () => {
    const [thematicfundArray, setThematicfundArray] = useState([]);

    const fetchAllthematicfunds = () => {
        console.log("fetch all thematic funds fired");
        thematicfundService.getAllthematicfunds().then((response) => {
          console.log("Response received from API", response.data);
          setThematicfundArray(response.data);
          console.log("State variable changed with response data");
        });
      };

      useEffect(() => {
        console.log("UseEffect fired..");
        fetchAllthematicfunds();
      }, []);

  const fundNames = thematicfundArray.map(thematicfund => thematicfund.fundName);
  const expectedReturns1y = thematicfundArray.map(thematicfund => thematicfund.expectedReturns1y);
  const expectedReturns3y = thematicfundArray.map(thematicfund => thematicfund.expectedReturns3y);
  const expectedReturns5y = thematicfundArray.map(thematicfund=> thematicfund.expectedReturns5y);

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

export default Graph1;
