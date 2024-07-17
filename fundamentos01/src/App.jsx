// Coisas do React
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// Estilos CSS
import './App.css'
// Meus componentes:
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import TemplateExpressions01 from './components/TemplateExpressions01'
import MyComponent from './components/MyComponent'
import Events01 from './components/Events01'
import Events02 from './components/Events02'
import Events03 from './components/Events03'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Fundamentos do React</h1>
        <FirstComponent />
        <SecondComponent />
        <TemplateExpressions01 />
        <MyComponent />
        <Events01 />
        <Events02 />
        <Events03 />
      </div>      
    </>
  )
}

export default App
