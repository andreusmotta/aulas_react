const Events01 = () => {
    
    /*
    Não precisa colocar o e dentro dos parenteses, mas é legal pra você poder ver os elementos que são chamados
    quando a função é chamada usando o cosole.log(e).
    */
    const handleMyEvents01 = (e) => { 
        console.log('Ativou o evento clicando no botão');
        alert('Clicou no botão!!!');
        console.log(e);
    }

    return (
        <div>
            <div>
                {/* Não colocamos as chaves no final do handleMyEvents01 para que ele não seja chamado quando carrega a página */}
                <button onClick={handleMyEvents01}>Clique aqui para um alerta</button>
            </div>
        </div>
    )
};

export default Events01;
