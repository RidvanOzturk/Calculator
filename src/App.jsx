
import './App.css'

function App() {
 
  var number1;
  var number2;
  var result;
  function addition(){
result=number1+number2;
alert(result);
}

  return (
    <>
      <div className='App'>
        <div className='Calculator'>
          <button onClick={addition}>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button><br></br>
          <button onClick={number1=1}>{number1 ? number2 : number1 }1</button>
          <button onClick={number2=2 || number1=2}>2</button>
          <button onClick={number1=3}>3</button><br></br>
          <button onClick={number1=4}>4</button>
          <button>5</button>
          <button>6</button><br></br>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          
        </div>
      </div>
    </>
  )
}

export default App
