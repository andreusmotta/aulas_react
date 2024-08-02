import React, { useState, useRef } from 'react'
import './TelaJogo.css'

const TelaJogo = ({
  testaLetra,
  letraEscolhida,
  categoriaEscolhida,
  letras,
  letrasAdivinhadas,
  letrasErradas,
  tentativas,
  pontuacao,
}) => {
  const [letra, setLetra] = useState("");
  const entradaLetraRef = useRef(null);

  const trataSubmit = (e) => {
    e.preventDefault();
    testaLetra(letra);
    setLetra("");
    entradaLetraRef.current.focus(); // Isso é pro foco sempre voltar para o campo.
  };

  return (
    <div className='jogo'>
      <p className='pontos'>
        <span>Pontuação: {pontuacao}</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className='dica'>
        Dica sobre a palavra: <span>{categoriaEscolhida}</span>
      </h3>
      <p>Você ainda tem {tentativas} tentativas.</p>      
      <div className='containerPalavra'>
        {letras.map((letra, i) => 
          letrasAdivinhadas.includes(letra) ? (
            <span key={i} className='letra'>{letra}</span>
          ) : (
            <span key={i} className='quadradoVazio'></span>
          )
        )}
        {/* <span className='letra'>A</span>
        <span className='quadradoVazio'></span> */}
      </div>
      <div className='containerLetra'>
        <p>Tente advinhar uma letra da palavra:</p>
        <form onSubmit={trataSubmit}>
          <input 
            type="text" 
            name="letra" 
            id="letra" 
            maxLength='1' 
            required 
            onChange={(e) => setLetra(e.target.value)}
            value={letra}
            ref={entradaLetraRef}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className='containerLetraErrada'>
        <p>Letras já utilizadas</p>
        {letrasErradas.map((letra, i) => (
          <span key={i}>{letra} ,</span>
        ))}

        {/* <span>a, </span>
        <span>b, </span> */}
      </div>
    </div>
  )
}

export default TelaJogo