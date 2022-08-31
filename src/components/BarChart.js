import React from "react";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

import { useHistory } from "react-router-dom";
Chart.register(CategoryScale);
function BarChart({ list }) {
  const history = useHistory();
  const con = list.map((data) => Object.values(data.task));
  const label = list.map((data) => data.username);
  console.log(list);
  console.log(label);

  let chartData = [];
  con.forEach((element, index) => {
    chartData.push({
      labels: ["task 1", "task 2", "task 3", "task 4"],

      datasets: [
        {
          label: label[index],

          data: con[index],

          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0"
          ],
          borderColor: "black",
          borderWidth: 2
        }
      ]
    });
  });
  console.log(chartData);

  return (
    <>
      <div className="admindiv">
        <button
          className="adminbutton"
          onClick={() => history.push("/", { from: "Users" })}
        >
          Click for Admin Page
        </button>
      </div>
      <div className="chart">
        {chartData.map((data, index) => (
          <div key={index} style={{ width: 500, margin: "50px" }}>
            <Bar data={data} />
          </div>
        ))}

        {/* <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div> */}
      </div>
    </>
  );
}

export default BarChart;
