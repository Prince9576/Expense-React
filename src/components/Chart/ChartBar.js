import "./ChartBar.css";
const ChartBar = (props) => {
  let barFillHeight = "0%";
  console.log("Props maxvalue", props);
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    console.log("Bar fill height", Math.round(props.value / props.maxValue));
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
