import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CarrosDetalhe from './components/CarrosDetalhe'

function App() {
  const [count, setCount] = useState(0)

  const  carros = [
    {id: 1, marca: "Chevrolet", cor: "Amarelo", novo: true, km: 0},
    {id: 2, marca: "Kia", cor: "Verde", novo: false, km: 150000},
    {id: 3, marca: "Alfa Romeo", cor: "Azul", novo: false, km: 210000},
    {id: 4, marca: "BYD", cor: "Vermelho", novo: true, km: 0},
  ]

  return (
    <div>
      <h1>Desafio 05 - CSS</h1>
      <h2>Carros</h2>
      <div className='carros'>
        {carros.map((carro) => (
            <CarrosDetalhe 
              key={carro.id}
              marca={carro.marca}
              cor={carro.cor}
              km={carro.km}
              novo={carro.novo}
            />
          ))}          
      </div>
    </div>
   
  )
}

export default App
