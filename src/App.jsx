
import { useState, useEffect } from 'react';
import './App.css'
import Swal from 'sweetalert2'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [operation, setOperation] = useState("");
  const handleInput = (e) => {
    setOperation(operation + e.target.value)
  }
  const clearInput = () =>{
    setOperation("");
  }
  const dividingDigits = () => {
    // var num = setOperation;
    // while (num !=0 ) {
    //   digits.push(num % 10);
    //   num = Math.trunc(num/10);
    // }
    // digits.reverse();
    // console.log("digits");
    var number = setOperation,
    output = [],
    sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}

console.log(output);


  }
  const equalCalculate = () => {
    if (operation == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must enter numbers first.',
        footer: 'Oh dude.'
      })
    }
    Swal.fire(
      'Good job!',
      eval(operation).toString(),
      'success'
    )
    setOperation("");
  }
  const change = e => {
    setOperation(e.target.value)
  }
  useEffect(() => {
    console.log(operation);
  },[operation]);
  return (
    <>
      <div className='App'>
        <div className='Calculator'>
            <button onClick={handleInput} value="+">+</button>
            <button onClick={handleInput} value="-">-</button>
            <button onClick={handleInput} value="/">/</button>
            <button onClick={handleInput} value="*">*</button>
            <Button variant="outline-danger" onClick={dividingDigits}>Danger</Button>{' '}
            <br></br><br></br>
            <input onChange={change} value={operation}></input><br></br>
            <button onClick={equalCalculate} value="=">=</button><br></br>
          <button onClick={handleInput} value="1">1</button>
          <button onClick={handleInput} value="2">2</button>
          <button onClick={handleInput} value="3">3</button><br></br>
          <button onClick={handleInput} value="4">4</button>
          <button onClick={handleInput} value="5">5</button>
          <button onClick={handleInput} value="6">6</button><br></br>
          <button onClick={handleInput} value="7">7</button>
          <button onClick={handleInput} value="8">8</button>
          <button onClick={handleInput} value="9">9</button><br></br>
          <button onClick={clearInput} value="">C</button>
        </div></div>
    </>
  )
}
export default App
