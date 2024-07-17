const Challenge = () => {

    const valor1 = 537
    const valor2 = 979

    const mostraSoma = () => {        
        const soma = valor1 + valor2
        return (
            alert(`O resultado da soma é ${soma}`)
        )
    }

    return (
        <div>
            <p>Clique no botão para somar os valores de {valor1} e {valor2}.</p>
            <button onClick={mostraSoma}>Somar os valores</button>
        </div>
    );
};

export default Challenge;
