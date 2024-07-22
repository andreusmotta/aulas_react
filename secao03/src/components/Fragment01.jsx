import React from 'react'

const Fragment01 = () => {
    return (
        /*
        Geralmente se monta assim:
        <div>
         <h2>Título com h2</h2>
         <h3>Título com h3</h3>
        </div>    
        */

        /* Mas com o Fragment dá pra montar só com as tagas vazias que ele encaixa onde estiver listado o
        componente no App,jsx: */
        <>
            <h2>Título com h2</h2>
            <h3>Título com h3</h3>
        </>
    );
};

export default Fragment01