import React from "react";
import "./Expensesdate.css";

const Expensesdate = (props) => {
  const month = ["abc", "jan", "feb", "mar", "apr", "may", "jun"];
  const monthValue = new Date(props.dateData.date).getMonth();
  const date = new Date(props.dateData.date).getDate();
  const year = new Date(props.dateData.date).getFullYear();
  return (
    <div className="date">
      <h2 className="month">{month[monthValue]}</h2>
      <h3>{year}</h3>
      <h3>{date}</h3>
    </div>
  );
};

export default Expensesdate;
