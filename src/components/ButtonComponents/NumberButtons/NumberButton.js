import React from "react";
import '../../../App.css'

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="all-buttons">{props.buttonData}</button>
    </>
  );
};


export default NumberButton;