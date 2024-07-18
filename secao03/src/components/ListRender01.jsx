import { useState } from "react"

const ListRender01 = () => {

    const [lista] = useState(["Fulano", "Siclano", "Beltrano"]); // Desse jeito não terá um índice e apesar de funcionar, terá error no console.

    const [listaComID] = useState([
        {id: 1, nome: "Fulano", idade: 41},
        {id: 62, nome: "Siclano", idade: 27},
        {id: 123, nome: "Beltrano", idade: 18},
    ])

    const [listaComIDSet, apagaUsuario] = useState([
        {id: 1, nome: "Fulano", idade: 41},
        {id: 2, nome: "Siclano", idade: 27},
        {id: 3, nome: "Beltrano", idade: 18},
    ])

    const deletaAleatorio = () => { // Não entendi nada =/
        const numeroAleatorio = Math.floor(Math.random() * 4);
        console.log(numeroAleatorio);

        apagaUsuario((usuarioAnterior) => {
            return usuarioAnterior.filter((listaComIDSet) => numeroAleatorio !== listaComIDSet.id);
        })
    }

    return (
        <div>
            {/* <div>
                <ul>
                    {lista.map((item) => (
                        <li>{item}</li> // Desse jeito não tem índice e dá erro no console, mesmo funcionando.
                    ))}
                </ul>
            </div> */}
            <div>
                <ul>
                    {lista.map((item,i) => (
                        <li key={i}>{item}</li> // Desse jeito o javascript coloca uma id na frente dos itens.
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {listaComID.map((usuario) => (
                        <li key={usuario.id}>{usuario.nome} - {usuario.idade}</li>
                    ))}
                </ul>                
            </div>
            <div>
                <ul>
                    {listaComIDSet.map((usuario) => (
                        <li key={usuario.id}>{usuario.nome} - {usuario.idade}</li>
                    ))}
                </ul>
                <button onClick={deletaAleatorio}>Deleta aleatóriamente um usuário</button>
            </div>
        </div>
    )
}

export default ListRender01