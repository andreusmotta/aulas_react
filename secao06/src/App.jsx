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

const quantidadeTentativas = 3;

function App() {
  const [count, setCount] = useState(0)
  const [estagioJogo, setEstagioJogo] = useState(estagios[0].nome)
  const [palavras] = useState(listaPalavras);

  const [palavraEscolhida, setPalavraEscolhida] = useState("");
  const [categoriaEscolhida, setCategoriaEscolhida] = useState("");
  const [letras, setLetras] = useState([]);

  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [tentativas, setTentativas] = useState(quantidadeTentativas);
  const [pontuacao, setPontuacao] = useState(50);


  const escolhePalavraECategoria = useCallback(() => {
    // Escolhe uma categoria aleatória:
    const categorias = Object.keys(palavras);
    const categoria = categorias[Math.floor(Math.random() * Object.keys(categorias).length)];

    console.log(categoria);

    // Escolhe uma palavra aleatória:
    const palavra = palavras[categoria][Math.floor(Math.random() * palavras[categoria].length)];

    console.log(palavra);

    return {palavra, categoria}
  }, [palavras]);

  // Inicia o jogo da forca.
  const iniciaJogo = useCallback(() => {
    // Limpa todas as letras:
    limpaEstadoLetras();

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
    setLetras(letrasPalavra);


    setEstagioJogo(estagios[1].nome)
  }, [escolhePalavraECategoria]);

  // Processa a entrada da letra.
  const testaLetra = (letra) => {
    const letraNormalizada = letra.toLowerCase()

    // Verifica se a letra já foi jogada.
    if (
      letrasAdivinhadas.includes(letraNormalizada) || 
      letrasErradas.includes(letraNormalizada)
    ) {
      return;
    }

    // Envia a letra advinhada ou remove uma tentativa
    if(letras.includes(letraNormalizada)) {
      setLetrasAdivinhadas((letrasAdivinhadasAtuais) => [
        ...letrasAdivinhadasAtuais,
        letraNormalizada
      ]);
    } else {
      setLetrasErradas((letrasErradasAtuais) => [
        ...letrasErradasAtuais,
        letraNormalizada,
      ]);

      setTentativas((tentativasAtuais) => tentativasAtuais - 1);
    }

    // console.log(letrasAdivinhadas);
    // console.log(letrasErradas);
    // console.log(letra)
    // setEstagioJogo(estagios[2].nome)
  };

  const limpaEstadoLetras = () => {
    setLetrasAdivinhadas([]);
    setLetrasErradas([]);
  };

  // Verifica a condição de vitória:
  useEffect(() => {
    const letrasUnicas = [...new Set(letras)]

    // Condição de vitória:
    if (letrasAdivinhadas.length === letrasUnicas.length) {
      // Adiciona pontuacao:
      setPontuacao((pontuacaoAtual) => (pontuacaoAtual += 100));

      // Reinicia o jogo com uma nova palavra:
      iniciaJogo();
    }

  }, [letrasAdivinhadas, letras, iniciaJogo])

  // Verifica se as tentatias acabaram:
  useEffect(() => {
    if (tentativas <= 0) {
      //Reinicia todos os estados:
      setEstagioJogo(estagios[2].nome);
    }
  }, [tentativas]);

  // Reinicia o jogo.
  const tentarNovamente = () => {
    setPontuacao(0);
    setTentativas(quantidadeTentativas);

    setEstagioJogo(estagios[0].nome)
  };

  return (
    <div className='App'>
      {estagioJogo === "inicio" && <TelaInicial iniciaJogo={iniciaJogo} />}
      {estagioJogo === "jogo" && <TelaJogo 
        testaLetra={testaLetra} 
        palavraEscolhida={palavraEscolhida}  
        categoriaEscolhida={categoriaEscolhida} 
        letras={letras}
        letrasAdivinhadas={letrasAdivinhadas}
        letrasErradas={letrasErradas}
        tentativas={tentativas}
        pontuacao={pontuacao}
        />
      }
      {estagioJogo === "fim" && <TelaFim tentarNovamente={tentarNovamente} pontuacao={pontuacao}/>}
    </div>
  )
}

export default App
