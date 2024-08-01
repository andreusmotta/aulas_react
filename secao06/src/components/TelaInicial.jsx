import React from 'react';
import "./TelaInicial.css";

const TelaInicial = ({iniciaJogo}) => {
  return (
    <div className='inicio'>
        <h1>Jodo da Forca</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={iniciaJogo}>Começar o jogo</button>
    </div>
  )
}

export default TelaInicial