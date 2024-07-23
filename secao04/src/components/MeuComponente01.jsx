import React from 'react'
import "./MeuComponente01.css";

const MeuComponente01 = () => {
  return (
    <div>
        <h1>CSS de Componente</h1>
        <p>Este é o parágrafo do componente</p>
        <p className='meu-comp01-paragrafo'>Este também é um parágrafo do componente.</p>
    </div>
  )
}

export default MeuComponente01