import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MeuForm01 from './components/MeuForm01'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <h1>Seção 05</h1>
      <div>
        <MeuForm01 />
      </div>
    </div>

  )
}

export default App
