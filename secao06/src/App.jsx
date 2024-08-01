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

  const [palavraEscolhida, setPalavraEscolhida] = useState("");
  const [categoriaEscolhida, setCategoriaEscolhida] = useState("");
  const [letras, setLetras] = useState([]);

  const escolhePalavraECategoria =() => {
    // Escolhe uma categoria aleatória:
    const categorias = Object.keys(palavras);
    const categoria = categorias[Math.floor(Math.random() * Object.keys(categorias).length)];

    console.log(categoria);

    // Escolhe uma palavra aleatória:
    const palavra = palavras[categoria][Math.floor(Math.random() * palavras[categoria].length)];

    console.log(palavra);

    return {palavra, categoria}
  };

  // Inicia o jogo da forca.
  const iniciaJogo = () => {
    // Escolhe palavra e categoria:
    const {palavra, categoria} = escolhePalavraECategoria();

    // Criando um array de letras:
    let letrasPalavra = palavra.split("");

    letrasPalavra = letrasPalavra.map((l) => l.toLowerCase());

    console.log(letrasPalavra);
    console.log(palavra, categoria);

    //Preencher estado:
    setPalavraEscolhida(palavra);
    setCategoriaEscolhida(categoria);
    setLetras(palavras);


    setEstagioJogo(estagios[1].nome)
  };

  // Processa a entrada da letra.
  const testaLetra = () => {
    setEstagioJogo(estagios[2].nome)
  };

  // Reinicia o jogo.
  const tentarNovamente = () => {
    setEstagioJogo(estagios[0].nome)
  }

  return (
    <div className='App'>
      {estagioJogo === "inicio" && <TelaInicial iniciaJogo={iniciaJogo} />}
      {estagioJogo === "jogo" && <TelaJogo testaLetra={testaLetra}/>}
      {estagioJogo === "fim" && <TelaFim tentarNovamente={tentarNovamente}/>}
    </div>
  )
}

export default App
