import { useState } from "react"

import styles from './Formulario.module.css';

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const renderizaResultado = () => {
        const alturaAoQuadrado = altura * altura;
        const imc = (peso / alturaAoQuadrado).toFixed(2);

        if (imc >= 40) {
            return `O IMC de ${imc} tem classificação Obesidade III (mórbida)`
        } else if (imc >= 35 && imc <= 39.9) {
            return `O IMC de ${imc} tem classificação Obesidade II (severa)`
        } else if (imc >= 30 && imc <= 34.9) {
            return `O IMC de ${imc} tem classificação Obesidade I`
        } else if (imc > 25 && imc <= 29.9) {
            return `O IMC de ${imc} tem classificação 'levemente acima do peso'`
        } else if (imc >= 18.6 && imc <= 24.9) {
            return `O IMC de ${imc} tem classificação Peso ideal`
        } else {
            return `O IMC de ${imc} tem classificação abaixo do peso`
        }
    }

    return (
        <div className="container">
            <header className={styles.cabecalho}>
                <h1>Calculadora IMC</h1>
                <p>Calcule aqui para saber se o seu peso está ideal!</p>
                <form className={styles.formulario}>
                    <input className={styles.inputs} type="number" placeholder="Seu peso" onChange={e => setPeso(parseFloat(e.target.value))}/>
                    <input className={styles.inputs} type="number" placeholder="Sua altura" onChange={e => setAltura(parseFloat(e.target.value))}/>
                    <p className={styles.resultado}>
                        {renderizaResultado()}
                    </p>
                </form>
            </header>
        </div>
    )
}

export default Formulario;