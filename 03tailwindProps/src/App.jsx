import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    name: 'Piyush',
    age:'20'
  }


  return (
    <>
      <h1 className='bg-green-400 text-violet-800 p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chai and code " btnText="laude 80k ke hein"/>
    </>
  )
}

export default App
