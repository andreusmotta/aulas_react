import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Minhas imagens importadas:
import Cidade from "./assets/city.jpg";
import ManageData01 from './components/ManageData01';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Seção 03</h1>
        <h2>Avançando em React</h2>
        <div>
          <img src="/img1.jpg" alt="Imagem de uma paisagem" />
        </div>
        <div>
          {/* Imagem em assets */}
          <img src={Cidade} alt="Imagem de uma cidade" />
        </div>
          <ManageData01 />
      </div>
    </>
  )
}

export default App
