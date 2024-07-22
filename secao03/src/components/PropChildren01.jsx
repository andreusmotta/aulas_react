import React from 'react'

const PropChildren01 = ({children, meuValor}) => {
  return (
    <div>
        <h3>{children}</h3>
        <h4>O valor é: {meuValor}</h4>
    </div>
  )
}

export default PropChildren01