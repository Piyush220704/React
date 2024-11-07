import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  // let counter = 0;
  function addValue(){
    // console.log("add value");
    // counter++;
    if(counter>=20){
      return;
    }
    setCounter(counter + 1);
    console.log(counter);
  }

  function removeValue(){
    if(counter <= 0){
      return;
    }
    setCounter(counter - 1);
    console.log(counter);
  }
  return (
    <>
      <h1>chai and code</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addValue}
      >add value</button>
      <br />
      <button
      onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App
