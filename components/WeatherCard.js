import React from "react";
import sunny from "../assets/Sunny.svg"
import cloudy from "../assets/Cloudy.svg"
import rainy from "../assets/Rainy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"


function WeatherCard(props) {
  const icon = ()=>{
    switch(props.data.forecast){
      case "Rainy":
        return <img className="card-img-top" src = {rainy} alt="Card image cap" id = "icon"/>;
      case "PartlyCloudy":
        return <img className="card-img-top" src = {partlyCloudy} alt="Card image cap" id = "icon"/>;
      case "Cloudy":
        return <img className="card-img-top" src = {cloudy} alt="Card image cap" id = "icon"/>;
      default:
        return <img className="card-img-top" src = {sunny} alt="Card image cap" id = "icon"/>;
    }
  };
  return (
    <div className = "card">
        <div className = "img-container">
          {icon()}      
        </div>
        <div class="card-body">
            <h3 className="card-title">{props.data.city}</h3>
            <h5 className="card-text">{props.data.temperature}</h5>
            <h5 className="card-text">{props.data.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
module.exports = WeatherCard;