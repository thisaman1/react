import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"aman",
    age:27
  }
  return (
    <>
      <h1 className='bg-green-400 text-green p-3 rounded-xl mb-4'>Hello Tailwind</h1>
      <Card btnTxt="press me" />
      <Card username="efg" />
    </>
  )
}

export default App
