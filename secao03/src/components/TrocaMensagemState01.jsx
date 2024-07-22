import React from 'react'

const TrocaMensagemState01 = ({propMsg}) => {
  const mensagens = ["Oi", "Hola", "Ciao", "Bonjour"]

    return (
    <div>
        <button onClick={() => propMsg(mensagens[0])}>1</button>
        <button onClick={() => propMsg(mensagens[1])}>2</button>
        <button onClick={() => propMsg(mensagens[2])}>3</button>
        <button onClick={() => propMsg(mensagens[3])}>4</button>
    </div>
  )
}

export default TrocaMensagemState01