
import { useState } from 'react';
import './App.css'

function App() {

  var result;
  const [firstOperation, setFirstOperation] = useState(null);
  const [secondOperation, setSecondOperation] = useState(null);
  
function handleInput(el) {

  if(firstOperation == null){
    setFirstOperation(el.target.value)
  }
  else if(secondOperation == null){
    setSecondOperation(el.target.value)
  }
  console.log("First: " + firstOperation + " | Second: " + secondOperation);
}
const handleAddition = () => {

  let result = parseInt(firstOperation)+parseInt(secondOperation);
  alert(result);
  setFirstOperation(null);
  setSecondOperation(null);
}
const handleSubtraction = () => {

  let result = parseInt(firstOperation)-parseInt(secondOperation);
  alert(result);
  setFirstOperation(null);
  setSecondOperation(null);
}
const handleDivision= () => {

  let result = parseFloat(firstOperation)/parseFloat(secondOperation);
  alert(result);
  setFirstOperation(null);
  setSecondOperation(null);
}
const handleMultiplication = () => {

  let result = parseInt(firstOperation)*parseInt(secondOperation);
  alert(result);
  setFirstOperation(null);
  setSecondOperation(null);
}
  return (
    <>
      <div className='App'>
        <div className='Calculator'>
          <button onClick={handleAddition}>+</button>
          <button onClick={handleSubtraction}>-</button>
          <button onClick={handleMultiplication}>*</button>
          <button onClick={handleDivision}>/</button><br></br>
       
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
