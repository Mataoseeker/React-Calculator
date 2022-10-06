import React from "react";
import "./style.css";
import { useState } from "react";


export default function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");


  //Declaring the operators
  const ops = ["/", "*", "+", "-", ".", "%"];


  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }
  

//Using for Loop to create the 1-9 button
  const createDigits = () => {
    const digits = [];
  
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

//Adding functionality to the Equal sign button
  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  //Adding functionality to the Delete Button
  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -10);
    setCalc(value);
  }  
  return (
    <div className="App">
      <div className="calculator">
      <div className="heading">React Calculator</div>
      
        <div className="display">
          {result ? <span>({result})</span> : ""} &nbsp; {calc || "0"}
        </div>


        <div className="operators"> 
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={deleteLast} >DEL</button>
          
          
           </div>


        <div className="digits">
          {createDigits()}  
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("/")}>/</button>
          <button  onClick={calculate}>=</button>
          
         
        </div>
      </div>
    </div>
  );

}
