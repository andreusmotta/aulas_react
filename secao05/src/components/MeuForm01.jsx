import React, { useState } from 'react';
import "./MeuForm01.css";


const MeuForm01 = () => {
    // 3 - Gerenciamento de dados:
    const [name, setName] = useState();
    const [email, setEmail] = useState();

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

    console.log(name);

    return (
        <div>
            {/* 1 - Criação de Form */}
            <form>
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" name="nome" placeholder='Digite o seu nome' onChange={trataNome}/>
                </div>
                {/* 2 - Label envolvendo input */}
                <label>
                    <span>E-Mail com input simples</span>
                    <input type="email" name="email" placeholder='Digite o seu e-mail' />
                </label>
                {/* 4 - Alteração de state inline */}
                <label>
                    <span>E-Mail com state inline</span>
                    <input type="email" name="email" placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MeuForm01