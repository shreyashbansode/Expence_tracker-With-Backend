import React from "react";
import "./Chartlist.css";

const Chartlist = (props) => {
  let barHeight = "0%";

  if (props.maxPrice > 0) {
    barHeight = Math.round(props.value / props.maxPrice) * 100 + "%";
  }
  return (
    <>
      <div className="chart-bg">
        <div className="chart-bar">
          <div className="chart-bar_inner">
            <div className="chart-bar_fill" style={{ height: barHeight }}></div>
          </div>
          <div className="chart-bar_label">{props.label}</div>
        </div>
      </div>
    </>
  );
};

export default Chartlist;
