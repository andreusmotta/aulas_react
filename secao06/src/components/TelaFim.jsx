import React from 'react'

const TelaFim = ({tentarNovamente}) => {
  return (
    <div>
      <h1>Fim de jogo</h1>
      <button onClick={tentarNovamente}>Jogar novamente</button>
    </div>
  )
}

export default TelaFim