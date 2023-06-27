
import { useState, useEffect } from 'react';
import './App.css'
import Swal from 'sweetalert2'


function App() {

  const [operation, setOperation] = useState("");
  const handleInput = (e) => {
    setOperation(operation + e.target.value)
  }
  const clearInput = () =>{
    setOperation("");
  }
  const equalCalculate = () => {
    if (operation == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must enter a number first.',
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
            <button onClick={handleInput} value="*">*</button><br></br><br></br>
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
