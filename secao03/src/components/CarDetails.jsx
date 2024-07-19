import React from 'react'

const CarDetails = ({ marca, km, cor, novo }) => {
    return (
        <div>
            <h2>Detalhes do carro com desestruturação de props:</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Kilometragem: {km}</li>
                <li>Cor: {cor}</li>
            </ul>
            {novo && <p>Este carro é novinho em folha!!!</p>}
        </div>
    )
}

export default CarDetails