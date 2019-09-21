import React, {useState} from "react";
import NumberButtonCreator from './NumberButton.js';
import {numbers} from "../../../data.js";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);

  const numbersArray = numbers.map(numberObject =>(
    <NumberButtonCreator buttonData={numberObject} />
  ));
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numbersArray}
    </div>
  );
};

export default Numbers;
