import React from "react";
import { useState } from "react";
import "./Filter.css";

const Filter = (props) => {
  const [filteredYear, setFilteredYear] = useState("All");

  const selectedYear = (e) => {
    setFilteredYear(e.target.value);
  };
  props.filteredValue(filteredYear);
  // console.log(filteredYear);

  return (
    <>
      <div className="filter">
        <p>Filtered by year</p>

        <select onChange={selectedYear} className="select">
          <option value="All">All</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
