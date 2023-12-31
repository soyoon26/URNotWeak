import React from "react";
import "./Percentage.css";

export const PercentBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: "100%",
    fontSize: "10px",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    fontSize: "10px",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontSize: "10px",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span className="percent" style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default PercentBar;
