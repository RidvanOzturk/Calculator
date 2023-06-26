
import { useState, useEffect } from 'react';
import './App.css'
import Swal from 'sweetalert2'


function App() {

  const [operation, setOperation] = useState("");
  const handleInput = (e) => {
    setOperation(operation + e.target.value)
  }
  const equalCalculate = () => {
    console.log(eval(operation));
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
            <button onClick={handleInput} value="*">*</button><br></br><br></br><br></br><br></br>
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
          <button onClick={handleInput} value=" ">C</button>
        </div></div>
    </>
  )
}
export default App
