import React from "react";
import '../../../App.css'

export default function SpecialButton (props){
  //console.log(props.buttonData);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="all-buttons">{props.buttonData}</button>
    </>
  );
};
