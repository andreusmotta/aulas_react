import React from 'react'
import './TelaJogo.css'

const TelaJogo = ({testaLetra}) => {
  return (
    <div className='jogo'>
      <p className='pontos'>
        <span>Pontuação: 000</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className='dica'>
        Dica sobre a palavra: <span>Dica...</span>
      </h3>
      <div className='containerPalavra'>
        <span className='letra'>A</span>
        <span className='quadradoVazio'></span>
      </div>
      <div className='containerLetra'>
        <p>Tente advinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letra" id="letra" maxLength='1' required/>
          <button>Jogar!</button>
        </form>
      </div>
      <div className='containerLetraErrada'>
        <p>Letras já utilizadas</p>
        <span>a, </span>
        <span>b, </span>
      </div>
    </div>
  )
}

export default TelaJogo