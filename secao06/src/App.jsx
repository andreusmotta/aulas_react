// Importações que o professor usou:
import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importação do arquivo de palavras:
import {listaPalavras} from "./data/palavras.jsx";

// Componentes:
import TelaInicial from "./components/TelaInicial";
import TelaJogo from './components/TelaJogo';
import TelaFim from './components/TelaFim';

const estagios = [
  { id: 1, nome: "inicio"},
  { id: 2, nome: "jogo"},
  { id: 3, nome: "fim"},
  
];

function App() {
  const [count, setCount] = useState(0)
  const [estagioJogo, setEstagioJogo] = useState(estagios[0].nome)
  const [palavras] = useState(listaPalavras);

  return (
    <div className='App'>
      {estagioJogo === "inicio" && <TelaInicial />}
      {estagioJogo === "jogo" && <TelaJogo />} 
      {estagioJogo === "fim" && <TelaFim />}

    </div>
  )
}

export default App
