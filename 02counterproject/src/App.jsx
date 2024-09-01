import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]= useState(0);

  function addValue(){
    if(counter<20)setCounter(counter+1);
  }
  function removeValue(){
    if(counter>0)setCounter(counter-1);
  }
  return (
    <>
      <h1>COUNTER: {counter}</h1>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <h2>Current Range [0,{counter*10}]</h2>
    </>
  )
}

export default App
