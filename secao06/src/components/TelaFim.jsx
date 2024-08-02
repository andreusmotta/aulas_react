import React from 'react'
import './TelaFim.css'

const TelaFim = ({tentarNovamente, pontuacao}) => {
  return (
    <div>
      <h1>Fim de jogo</h1>
      <h2>
        A sua pontuação foi: <span>{pontuacao}</span>
      </h2>
      <button onClick={tentarNovamente}>Jogar novamente</button>
    </div>
  )
}

export default TelaFim