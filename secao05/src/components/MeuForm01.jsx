import React, { useState } from 'react';
import "./MeuForm01.css";


const MeuForm01 = ({usuario}) => {
    // 3 - Gerenciamento de dados:
    const [name, setName] = useState(usuario ? usuario.nome : '');
    const [email, setEmail] = useState(usuario ? usuario.email : '');
    const [desc, setDesc] = useState(usuario ? usuario.desc : "");
    const [func, setFunc] = useState(usuario ? usuario.func : "");



    // 6 - Controlled Input

    // Só para testar se tá pegando a função no onChange:
    // const trataNome = (e) => {
    //     console.log("Mudou o nome");
    // };

    // Só para testar se tá gravando certo a função no onChange:
    // const trataNome = (e) => {
    //     console.log(e.target.value);
    // };

    const trataNome = (e) => {
        setName(e.target.value);
    };

    // console.log(name);
    // console.log(email);

    const trataSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o Formulário")
        console.log(name,email,desc,func)

        // Validação
        // Envio
        // e depois:
        // 7 - Limpar formulário:

        setName("");
        setEmail("");
        setDesc("");
    }

    return (
        <div>
            {/* 5 - Envio de Form */}
            {/* 1 - Criação de Form */}
            <form onSubmit={trataSubmit}>
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" name="nome" placeholder='Digite o seu nome' onChange={trataNome} value={name}/>
                </div>
                {/* 2 - Label envolvendo input */}
                <label>
                    <span>E-Mail com input simples</span>
                    <input type="email" name="email" placeholder='Digite o seu e-mail' />
                </label>
                {/* 4 - Alteração de state inline */}
                <label>
                    <span>E-Mail com state inline</span>
                    <input type="email" name="email" placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email}/>
                </label>
                <span>Bio:</span>
                <textarea name="descricao" placeholder='Descrição do usuário' onChange={(e) => setDesc(e.target.value)} value={desc}></textarea>
                {/* 9 - Para Select */}
                <span>Função no sistema</span>
                <select name="funcao" onChange={(e) => setFunc(e.target.value)} value={func}>
                    <option value="usuario">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MeuForm01