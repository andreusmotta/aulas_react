import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Challenge from './components/Challenge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Desafio 02</h1>
        <h2>Resultado do desafio:</h2>
        <Challenge />
      </div>      
    </>
  )
}

export default App
