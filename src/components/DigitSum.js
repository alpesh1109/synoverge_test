import React, { useState } from "react";

function DigitSum() {
  const [result, setResult] = useState(0);
  const [num, handleChage] = useState('');

  const sumDigits = (e) => {
    e.preventDefault();
    let tmp = calculation(num);
    setResult(tmp);
  }

  // Find Sum of Digits Number 
  const calculation = (num) => {
    try {
      if (num !== 0) {
        return (num % 10 + calculation(Math.floor(num / 10)));
      } else {
        return 0;
      }
    } catch (error) {
      console.log(`calculation function -> Error: ${error.message}`)
    }
  };


  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <h3>Find Sum of Digits Number</h3>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <h4>How it works?</h4>
            <p>Steps</p>
            <p>1. Input a number</p>
            <p>2. Click on button</p>
            <p>3. Get your result</p>
            <p>Example : Input : 251 Output: 8, i.e. 2+5+1 = 8</p>
          </div>
          <div className="col-sm">
            <form onSubmit={sumDigits} method="post" >
              <div class="form-group" style={{ marginTop: '2%' }}>
                <input className="form-control" type="number" name="num" value={num} onChange={(e) => handleChage(e.target.value.replace(/\D/g, ""))} required></input>
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: '1%' }}>Sum</button><br />
              <label>Sum : {result} </label>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default DigitSum;
