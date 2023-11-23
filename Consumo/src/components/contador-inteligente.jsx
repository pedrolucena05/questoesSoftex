import React from 'react';
import { useState } from "react";
import Visor from './visor.jsx';

const Contador = () => {
    
    const [contador, setCont] = useState(0);
    const [soma, setIncrement] = useState(5);
    
    function incremento(valor) {
        if (valor < 0 && contador <  Math.abs(valor)) {
            
        }   
        else {
            setCont(contador + valor)
        } 
    }

    function constante(valor) {
        if (valor == -5 && soma == 5) {
            
        }
        else {
            setIncrement(valor + soma);
        }
    }

    return (
        <div>
            <p>Incremento: {soma}</p>
            <button data-testid="incremento-constante" onClick={() => constante(5)} >+</button>
            <button data-testid="decremento-constante" onClick={() => constante(-5)} >-</button><br /><br />
            <button data-testid="incremento-montante" onClick={() => incremento(soma)} >+</button>
            <button data-testid="decremento-montante" onClick={() => incremento(-soma)} >-</button>
            <Visor contador={contador} />
        </div>    
    )    
}

export default Contador;