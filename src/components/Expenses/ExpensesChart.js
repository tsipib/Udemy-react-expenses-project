import React from "react";

import Chart from "../Chart/Chart";

function ExpensesChart(props) {
  const chartData = [
    { lable: "Jan", value: 0 },
    { lable: "Feb", value: 0 },
    { lable: "Mar", value: 0 },
    { lable: "Apr", value: 0 },
    { lable: "May", value: 0 },
    { lable: "Jun", value: 0 },
    { lable: "Jul", value: 0 },
    { lable: "Aug", value: 0 },
    { lable: "Sep", value: 0 },
    { lable: "Oct", value: 0 },
    { lable: "Nov", value: 0 },
    { lable: "Dec", value: 0 }
  ];

  for (const expense of props.expenses){
      const expenseMonth = expense.date.getMonth();
      chartData[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartData}/>;
}

export default ExpensesChart;