import React, {useState } from "react";
import axios from "axios";
import "./Calculator.css";

function Calculator() {
  //first and second are values from the user input 
  const [first, setFirst] = useState(""); 
  const [second, setSecond] = useState("");
  const [rate, setRate] = useState([]); 

  //api call
  const getRate = (first, second) => {
    axios({
      method: "GET",
      url: `https://blockchain.info/tobtc?currency=${first}&value=${second}`,
    })
      .then((response) => {
        let num = response.data;
        setRate("= " +num+ " Bitcoin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  return (
    <section className="calculator-section" id="calculator">
      <div><h1>Currency Exchange</h1>
      <h1>Calculator</h1></div>
      <div className="calculator-box">
        <div>
        
        <div>
        <label htmlFor="">amount</label>
        <input
          type="text"
          placeholder="enter the amount"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        />
        </div>
        <div>
        <label htmlFor="">Currency code</label>
        <input
          type="text"
          value={first}
          placeholder="enter your currency eg. usd"
          onChange={(e) => setFirst(e.target.value.toUpperCase())}
        />
        </div>
        <div>
        <button
          onClick={() => {
            getRate(first, second);
          }}
        >
          Convert
        </button>
        </div>
        </div>
          <div className="output">
            <h1>{second} {first} {rate}</h1>
          </div>
      </div>
      
    </section>
  );
}

export default Calculator;
