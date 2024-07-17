import { useState } from "react";

const ManageData01 = () => {
    let umDado = 10;

    console.log(`Conteúdo da variável umDado: ${umDado}`);

    const [number, trocaNumero] = useState(20);

    console.log(`Conteúdo da variável number com useState: ${number}`);

    return (
        <div>
            <div>
                <p>Valor da variável umDado: {umDado}</p>
                <button onClick={() => {(umDado = 15);console.log(`Novo conteúdo da variável umDado: ${umDado}`);}}>Mudar valor da variável</button>
            </div>
            <div>
                <p>Valor da variável numero com useState: {number}</p>
                <button onClick={() => trocaNumero(25)}>Mudar o valor da variável numero que tá com useState</button>
            </div>
            <br />
            <div>
                <button onClick={() => trocaNumero(20)}>Voltar o valor para 20</button>
            </div>
        </div>
    )
}

export default ManageData01