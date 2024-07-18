import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Minhas imagens importadas:
import Cidade from "./assets/city.jpg";
import ManageData01 from './components/ManageData01';
import ListRender01 from './components/ListRender01';
import ConditionalRender from './components/ConditionalRender';
import ConditionalRender01 from './components/ConditionalRender01';


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
        <div>
          <ManageData01 />          
        </div>
        <div>
          <ListRender01 />
        </div>
        <div>
          <ConditionalRender />
        </div>
        <div>
          <ConditionalRender01 />
        </div>
      </div>
    </>
  )
}

export default App
