import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  return (
    <>
    <div className='w-full duration-200 h-screen ' style={{backgroundColor:color}}>
      <h1 className='w-full duration-200 text-black h-20 text-center'>Change the background by a click</h1>
      <div className='flex flex-wrap justify-center'>
      <div className='flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl shadow-lg bg-white w-60'>
      <button className='bg-red-500 w-14 rounded-full' onClick={()=>setColor('red')}>Red</button>{"   "}
      <button className='bg-green-300 w-14 rounded-full' onClick={()=>setColor('green')}>Green</button>{"   "}
      <button className='bg-blue-400 w-14 rounded-full' onClick={()=>setColor('blue')}>Blue</button>{"   "}
      </div>
    </div>
    </div>
    </>
  )
}

export default App
