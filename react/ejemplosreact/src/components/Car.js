import { useState } from "react";

function Car(props) {
    const [estado, setEstado] = useState(0);
    const [velocidad, setVelocidad] = useState(0);

    var coche = {
        marca: props.marca,
        modelo: props.modelo,
        velocidadMaxima: parseInt(props.velocidadmaxima),
        aceleracion: parseInt(props.aceleracion)
    }
    //INCLUIMOS UN METODO PARA COMPROBAR EL ESTADO DEL COCHE DEPENDIENDO DE DICHO ESTADO
    //LO QUE HAREMOS SERA DEVOLVER CODIGO HTML
    const comprobarEstado = () => {
        if (estado == true){
            return (<h1 style={{color: "green"}}>Arrancado</h1>)
        }else{
            return (<h1 style={{color: "red"}}>Detenido</h1>)
        }
    }
    //CREAMOS UN METODO PARA CAMBIAR LA ACELERACION DEL COCHE
    const aceleracionCoche = () => {
        if (estado == false) {
            alert("El coche esta detenido");
            setVelocidad(0);
        }else {
            if (velocidad >= coche.velocidadMaxima) {
                setVelocidad(coche.velocidadMaxima);
            }else{
                setVelocidad(velocidad + coche.aceleracion);
            }
        }
    }
    return (
        <div>
            <h1 style={{color: "blue"}}>Componente Car: {coche.marca}, {coche.modelo}</h1>
            <h2 style={{color: "fuchsia"}}>Velocidad actual: {velocidad} km/h</h2>
            <div>
                {comprobarEstado()}
            </div>
            <button onClick={ () => {
                setEstado(!estado);
            }}>
                Arrancar/Detener
            </button>
            <button onClick={ () => aceleracionCoche()}>
                Acelerar
            </button>
        </div>
    )
}

export default Car;