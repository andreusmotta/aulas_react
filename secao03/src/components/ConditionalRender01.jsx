import React, { useState } from 'react'


const ConditionalRender01 = () => {
    const [nome, setaNome] = useState("Fulano");
    return (
        <div>
            <h2>Usando if ternário, qual é o nome?</h2>
            {nome === "Fulano" ? (
                <div>
                    <p>O nome no useState é Fulano.</p>
                </div>
            ) : (
                <div>
                    <p>O nome no useState é outro.</p>
                </div>
            )}
            <button onClick={() => setaNome("Siclano")}>Troque o nome no useState</button>
        </div>
    );
};

export default ConditionalRender01