import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Minhas importações:
import MeuComponente01 from './components/MeuComponente01'
import Titulo01 from './components/Titulo01'

function App() {
  const [count, setCount] = useState(0)

  const n = 15;
  const [nome] = useState("Fulano");
  const tituloVermelho = true;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>

      {/* CSS de Componente */}
      <MeuComponente01 />
      <p>Este parágrafo é do App.jsx</p>

      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento de parágrafo foi estilizado de forma inline
      </p>
      <p style={{ 
        color: "magenta", 
        padding: "25px", 
        borderTop: "2px solid red" }}>
        Este elemento de parágrafo foi estilizado de forma inline
      </p>

      {/* CSS Inline Dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>
        CSS Dinâmico com o valor do if menor
      </h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>
        CSS Dinâmico com o valor do if maior
      </h2>
      <h2 style={
        nome === "Fulano" 
          ? ({color: "green", backgroundColor: "black"}) 
          : null
        }
      >
        CSS Dinâmico com o valor do if maior
      </h2>

      {/* Classe dinâmica */}
      <h2 className={tituloVermelho ? "titulo-vermelho" : "titulo"}>Este texto vai ter classe dinâmica baseada no variável tituloVermelho ser falsa ou verdadeira</h2>

      {/* CSS Módulos */}
      <Titulo01 />

    </div>
  )
}

export default App
