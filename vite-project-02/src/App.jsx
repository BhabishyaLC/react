import { useState } from 'react'
import './App.css'
import Image from './components/image'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl p-5 rounded-md text-white bg-blue-500'>Hello World!</h1>
      <Image username="Bhabishya"/>
      <Image />
      <Image username='Ayush'/>

    </>
  )
}

export default App
