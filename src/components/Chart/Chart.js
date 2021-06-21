import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const valueArr = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const maximumAmount = Math.max(...valueArr);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={maximumAmount}
          />
        );
      })}
    </div>
  );
};

export default Chart;
