import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true);

    return (
        <div>
            <h2>O texto abaixo será exibido?</h2>
            {x && <p>Se a constante "x" for verdadeira, sim.</p>}
            {!x && <p>Se a constante "x" for falsa, não.</p>}
        </div>
    );
};

export default ConditionalRender