import { useState } from "react";

function Contador(){
    const [numero, setNumero] = useState(0);
    const sumarContador = () => {
        // para modificar el valor de una variable de tipo state se utiliza setVariable
        setNumero(numero + 1);
    }
    return(
        <div>
            <h1 style={{color: "blue"}}>Ejemplo Contador State</h1>
            <h2 style={{color: "red"}}>Contador {numero}</h2>
            <button onClick={ () => sumarContador() }>Sumar contador</button>
        </div>
    )
}

export default Contador;