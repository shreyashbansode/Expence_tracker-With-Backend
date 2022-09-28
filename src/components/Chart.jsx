import React from "react";
import Chartlist from "./Chartlist";
import "./Chart.css";



const Chart = (props)=>{

    let chartDataPoints = [
        { label:"jan",price:0},
        { label:"feb",price:0},
        { label:"Mar",price:0},
        { label:"Apr",price:0},
        { label:"May",price:0},
        { label:"Jun",price:0},
        { label:"jul",price:0},
        { label:"Aug",price:0},
        { label:"Sep",price:0},
        { label:"Oct",price:0},
        { label:"Nov",price:0},
        { label:"Dec",price:0},
    ];

for(let record of props.filterRecord){
    let month = new Date(record.date).getMonth();

        chartDataPoints[month].price = record.price;

}

let priceArray = props.filterRecord.map((row)=>row.price);

let maxPrice = Math.max(...priceArray)

console.log(maxPrice);


   

    return(

    <div className="chart">
    
    {chartDataPoints.map((record)=>{

    return(
        <Chartlist label = {record.label}  value = {record.price} maxPrice= {maxPrice}/>
    )
})}
    
    
    </div>
    );
}


export default Chart;