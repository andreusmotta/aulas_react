import { useState, useEffect } from 'react';
import './App.css';
import { useFetch } from "./hooks/useFetch";


const url = "http://localhost:3000/produtos";

function App() {
  const [count, setCount] = useState(0)

  const [produtos, setProdutos] = useState([])

  // 4 - Custom:
  const { dados: itens, configHttp, carregando, erro } = useFetch(url);

  const [nome, setNome] = useState("");
  const [preço, setPreço] = useState("");

  // 1 -  Resgatando os dados:

  // useEffect(() => {
  //   async function pegaDados() {
  //     const res = await fetch(url);
  //     const dados = await res.json();
  //     setProdutos(dados);
  //   };  
  //   pegaDados();
  // }, []);

  // 2 - Adiciona produtos:
  const handleSubmit = async (e) => {
    e.preventDefault();

    const produto = {
      nome,
      preço,
    };
    // console.log(produto);

    // Agora o conteúdo da linha 41~53 está no hook useFetch.jsx
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(produto),
    // });

    // // 3 - Carregamento dinâmico:

    // const produtoAdicionado = await res.json();

    // setProdutos((prevProdutos) => [...prevProdutos, produtoAdicionado]);

    // 5 - Refatorando POST:
    configHttp(produto, "POST");

    // Limpando os inputs:
    setNome("");
    setPreço("");

  };

  return (
    <div>
      <h1>Lista de Produtos</h1>
      {/* 6 - Carregando */}
      {carregando && <p>Carregando informações...</p>}
      {erro && <p>{erro}</p>}
      {!erro && (
        <ul>
          {itens && itens.map((produto) => (
            <li key={produto.id}>
              {produto.nome} - R$ {produto.preço}
            </li>
          ))}
        </ul>
      )}
      <div className='add-produto'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" name="preço" value={preço} onChange={(e) => setPreço(e.target.value)} />
          </label>
          {/* 7 - State de carregando no post */}
          {carregando && <input type="submit" value="Adicionando..." disabled />}
          {!carregando && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  )
}

export default App
