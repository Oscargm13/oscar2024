import './../App.css';

function DobleNumero()
{
    var ejemplo = "Soy una variable de jueves!!!";
    const numeroDoble = (numero) => {
        var doble = numero * 2;
        console.log(doble);
    }
    const cambiarVariable = () => {
        console.log("Valor Antes: "+ ejemplo)
        ejemplo = "He cambiado el valor!!!!"
        console.log("Valor despues: " + ejemplo)
    }
    var miEstilo = {
        color: "blue"
    }
    return (
        <div className='App'>
            <h1 style={miEstilo}>Ejemplo metodos parametros</h1>
            <h2 style={{color: "green"}}>{ejemplo}</h2>
            <button onClick={ () => cambiarVariable()}>cambiar valor</button>
            <button onClick={ () => numeroDoble(7) }>Doble 7</button>
            <button onClick={ () => numeroDoble(199) }>Doble 199</button>
        </div>
    )
}

export default DobleNumero;