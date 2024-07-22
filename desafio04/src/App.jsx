import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsuarioDetalhes from './components/UsuarioDetalhes'

function App() {
  const [count, setCount] = useState(0)

  const pessoas = [
    { id: 1, nome: "Fulano Ribeiro", idade: 25, profissao: "Caminhoneiro"},
    { id: 2, nome: "Siclano Franco", idade: 16, profissao: "Namorado Trofeu"},
    { id: 3, nome: "Beltrano da Silveira", idade: 21, profissao: "Ourives"},
    { id: 4, nome: "Zé das Cove", idade: 54, profissao: "Fazendeiro"},
  ]


  return (

    <div>
      <h1>Desafio 04</h1>
      <h2>Lista de usuários:</h2>
      {/* Pra testar se tá pegando o componente: */}
      {/* <UsuarioDetalhes nome="Teste nome" idade={6} profissao="Teste Prof"/> */}
      {pessoas.map((pessoa) => (
        <UsuarioDetalhes
          key={pessoa.id}
          nome={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissao}
        />
      ))}
    </div>

  )
}

export default App
