import React from "react";

const seasonConfig = {
  summer: {
    text: "It might be hot",
    icon: "☀",
  },
  winter: {
    text: "it can be nice when it's not freezing",
    icon: "❅",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];
  return (
    <div className="col-sm-12">
      <div className={`season-display ${season}`}>
        <p className="text-success">
          You have {season} outside. Cause your latitude is {props.lat}
        </p>
        <p className="text-dark">{`${icon} ${text} ${icon}`}</p>
      </div>
    </div>
  );
};

export default SeasonDisplay;
