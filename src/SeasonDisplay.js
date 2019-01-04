import React from "react";

const getSeason = (lat, month) => {
  // if lat > 0 then northen elas souther

  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  }

  return lat > 0 ? "winter" : "summer";
};

const SeasonDisplay = props => {
  const season = getSeason(props.latitude, new Date().getMonth());
  console.log(season);
  return <div>{season === "winter" ? "its cold" : "go to beach.."}</div>;
};

export default SeasonDisplay;
