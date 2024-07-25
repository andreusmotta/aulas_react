import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TelaInicial from './components/TelaInicial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <TelaInicial />
    </div>
  )
}

export default App
