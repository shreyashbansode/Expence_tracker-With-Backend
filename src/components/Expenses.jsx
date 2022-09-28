import React, { useState } from "react";
import "./Expenses.css";
import Expensesdate from "./Expensesdate";
import Filter from "./Filter";
import Chart from "./Chart";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Expenses = (props) => {
  // console.log(props.expensedata);
  const Navigate = useNavigate();

  const [updateFilterYear, setUpdateFilterYear] = useState();
  // const [noData , setNoData]= useState(false);
  // console.log(noData);
  const filteredValue = (filteredYear) => {
    console.log(filteredYear);

    setUpdateFilterYear(filteredYear);
  };

  let filterRecord = props.expensedata.filter((row) => {
    if (updateFilterYear == "All") {
      return row;
    } else {
      return new Date(row.date).getFullYear() == updateFilterYear;
    }
  });

  // if(filterRecord.length == 0){
  //   setNoData (true)

  // }

  return (
    <>
      <div className="black-bg">
        <Filter filteredValue={filteredValue} />
        <Chart filterRecord={filterRecord}></Chart>
        <div className='expanceOuter scrollbar-juicy-peach'>
          {" "}
          {filterRecord.map((row) => {
            return (
              <div className="exp_list">
                <Expensesdate dateData={row} />

                <div className="btn_item">
                  <h4>{row.item}</h4>
                </div>

                <div className="price">₹ {row.price}</div>
                <NavLink exact to={`/edituser/${row._id}`}>
                  {" "}
                  <button type="button" class="btn btn-outline-success">
                    Edit Item
                  </button>
                </NavLink>
                <NavLink exact to={`/deleteuser/${row._id}`}>
                  {" "}
                  <button type="button" class="btn btn-outline-danger">
                    Delete Item
                  </button>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Expenses;
