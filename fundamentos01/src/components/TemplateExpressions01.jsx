const TemplateExpressions01 = () => {
    const nome = 'Fulano';
    const dados = {
        idade: 25,
        profissao: 'Programador',
    };

    return (
        <div>
            <h1>Olá {nome}, tudo bem contigo? </h1>
            <p>Você atua como {dados.profissao}</p>
            <p>{4 + 4}</p>
            <p>{console.log('JSX React')}</p>
        </div>
    );
};

export default TemplateExpressions01;
