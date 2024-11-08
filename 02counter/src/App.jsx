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
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1); // useState send updates in batches and send alltogether 
    setCounter((prevCouter)=> prevCouter+1);
    setCounter((prevCouter)=> prevCouter+1);
    setCounter((prevCouter)=> prevCouter+1);
    setCounter((prevCouter)=> prevCouter+1);
  //the prevCounter gives the previous state of the count value......when the 1st setCounter callback function is called and executed then only the next setCounter will execute and not in batches


    // console.log(counter);
  }

  function removeValue(){
    if(counter <= 0){
      return;
    }
    setCounter(counter - 1);
    // console.log(counter);
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
