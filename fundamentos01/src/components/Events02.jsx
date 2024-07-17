const Events02 = () => {
    return (
        <div>
            <button onClick={() => alert('Clicou no outro botão também')}>CLique aqui para outro alerta</button>
            <button
                onClick={
                    () => {
                        if (true) {
                            alert('Alerta com função feita do jeito errado, que feio!!!')
                        }
                    }
                }>
                Clique aqui para um alerta feito do jeito errado
            </button>
        </div>
    )
};

export default Events02;
