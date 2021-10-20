import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [result, countSum] = useState(0);
  const [num, handleChage] = useState('');

  const sumFun = (e) => {
    e.preventDefault();
    let tmp = sumNumber(num);
    countSum(tmp);
  }

  // Create handleIncrement event handler
  function sumNumber(num) {
    if (num !== 0) {
      return (num % 10 + sumNumber(Math.floor(num / 10)));
    } else {
      return 0;
    }
  };


  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <h3 style={{ textAlign: 'center' }}>Find Sum of Digits of a Number</h3>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <h2>How it works?</h2>
            <p>Steps</p>
            <p>1. Input a number</p>
            <p>2. Click on button</p>
            <p>3. Get your result</p>
            <p>Example : Input : 251 Output: 8, i.e. 2+5+1 = 8</p>
          </div>
          <div class="col-sm">
            <form onSubmit={sumFun} method="post" >
              <div class="form-group" style={{marginTop:'2%'}}>
               <input className="form-control" type="number" name="num" value={num} onChange={(e) => handleChage(e.target.value.replace(/\D/g,""))} required></input>
              </div>            
              <button type="submit" className="btn btn-primary" style={{marginTop:'1%'}}>Sum</button><br/>
              <label>sum : {result} </label>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
