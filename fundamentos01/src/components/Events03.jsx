const Events03 = () => {

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso verdadeiro!!!</h1>
        } else {
            return <h1>Renderizando aquilo falso!!!</h1>
        }
    }

    return (
        <div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );

};


export default Events03;
