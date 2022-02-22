import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dataValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={totalMax}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
}

export default Chart;
