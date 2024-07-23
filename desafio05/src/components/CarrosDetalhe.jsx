import styles from "./CarrosDetalhe.module.css";

const CarrosDetalhe = ({ marca, km, cor, novo }) => {
    return (
        <div className={styles.cartao}>
            <h2>Detalhes do carro:</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Kilometragem: {km}</li>
                <li>Cor: {cor}</li>
            </ul>
            {novo && <p>Este carro é novinho em folha!!!</p>}
        </div>
    )
}

export default CarrosDetalhe