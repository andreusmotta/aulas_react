import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Minhas imagens importadas:
import Cidade from "./assets/city.jpg";
import ManageData01 from './components/ManageData01';
import ListRender01 from './components/ListRender01';
import ConditionalRender from './components/ConditionalRender';
import ConditionalRender01 from './components/ConditionalRender01';
import ShowUserNameNome from './components/ShowUserNameNome';
import ShowUserNameObj from './components/ShowUserNameObj';
import ShowUserNameUseState from './components/ShowUserNameUseState';
import CarDetails from './components/CarDetails';


function App() {
  const [count, setCount] = useState(0)

  // Para o props:
  const objetoNome = "Siclano";
  const [nomeUseState] = useState("Beltrano");

  // Para lista de compomnentes:
  const  carros = [
    {id: 1, marca: "Chevrolet", cor: "Amarelo", novo: true, km: 0},
    {id: 1, marca: "Kia", cor: "Verde", novo: false, km: 150000},
    {id: 1, marca: "Alfa Romeo", cor: "Azul", novo: false, km: 210000},
    {id: 1, marca: "BYD", cor: "Vermelho", novo: true, km: 0},
  ]

  return (    
      <div>
        <h1>Seção 03</h1>
        <h2>Avançando em React</h2>
        <div>
          <img src="/img1.jpg" alt="Imagem de uma paisagem" />
          {/* Imagem em assets */}
          <img src={Cidade} alt="Imagem de uma cidade" />
        </div>
        <ManageData01 />
        <ListRender01 />
        <ConditionalRender />
        <ConditionalRender01 />
        {/* Props */}
        <ShowUserNameNome nome="Fulano" />
        <ShowUserNameObj nome={objetoNome} />
        <ShowUserNameUseState nome={nomeUseState} />
        {/* Desestruturação */}
        <CarDetails marca="Volkswagen" km={100000} cor="Vermelha" novo={false}/>
        <CarDetails marca="BYD" km={0} cor="Cinza" novo={true}/>
        <CarDetails marca="Fiat" km={450000} cor="Verde" novo={false}/>
        <CarDetails marca="Gurgel" km={980000} cor="Amarelo" novo={false}/>
        {/* Loop em array de objetos: */}
        {carros.map((carro) => (
          <CarDetails 
            marca={carro.marca}
            cor={carro.cor}
            km={carro.km}
            novo={carro.novo}
          />
        ))}
      </div>    
  )
}

export default App
