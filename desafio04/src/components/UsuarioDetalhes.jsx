import React from 'react'

const UsuarioDetalhes = ({ nome, idade, profissao }) => {
    return (
        <div>
            <ul>
                <li>Nome: {nome}</li>
                <li>idade: {idade}</li>
                <li>profissao: {profissao}</li>
            </ul>
            {idade >= 18 && <p>Autorizado para tirar habilitação</p>}
            {idade <= 18 && <p>Não autorizado para tirar habilitação</p>}
            <hr />
        </div>
    )
}

export default UsuarioDetalhes
