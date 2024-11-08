import { useState } from 'react'


function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="w-full h-screen duration-150" style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-black'>
          <button onClick={()=>{setColor("red")}} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor : "red"}}>red</button>
          <button onClick={()=>{setColor("blue")}} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor : "blue"}}>blue</button>
          <button onClick={()=>{setColor("green")}} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor : "green"}}>green</button>
          <button onClick={()=>{setColor("purple")}} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor : "purple"}}>purple</button>
        </div>
      </div>
    </div>
  )
}

export default App

//onClick needs function not the value that is returned from the function so instead of passing the setColor as a function directly we use callback