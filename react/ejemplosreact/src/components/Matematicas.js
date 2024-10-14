function Matematicas(props) {
    var ejecutarPadre = props.triple;
    var numero = props.numero;
    function doble(props){
        const num1 = props;
        console.log(num1 * 2);
    }

    return(
        <div>
            <h1>HIJO</h1>
            <button onClick={() => ejecutarPadre(numero)}>triple</button>
            <button onClick={() => doble(numero)}>doble</button>
        </div>
    )
}

export default Matematicas;