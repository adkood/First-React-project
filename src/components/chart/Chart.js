import react from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

  const dataValue = props.item.map(element => element.value);
  const totalMaxValue = Math.max(...dataValue);

  return (
    <div className="chart">
      {props.item.map((element) => (
        <ChartBar
          key={element.label}
          value={element.value}
          maxValue={totalMaxValue}
          label={element.label}
        />
      ))}
    </div>
  );
};

export default Chart;
