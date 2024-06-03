import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter]=useState(0)
 const incValue=()=>{
  setCounter(counter+1)
 }
 const decValue=()=>{
  let newCounter=counter-1
  setCounter(newCounter)
 }
  return (
    <>
     <h1>REACT </h1>
     <h2>Counter:{counter}</h2>
     <button
     onClick={incValue}>Add value</button>{" "}
     <button
     onClick={decValue}>Remove value</button>
     <p>Footer:{counter}</p>
    </>
  )
}

export default App
