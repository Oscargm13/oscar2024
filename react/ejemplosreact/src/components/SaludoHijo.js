function SaludoHijo(props) {
    //CAPTURAMOS EN UNA VARIABLE EL METODO DEL PADRE QUE VIENE EN PROPS
    var ejecutarPadre = props.metodoPadre;
    var idhijo = props.idhijo;
    return (
    <div>
        <h1 style={{color:"blue"}}>
            Saludo HIJO
        </h1>
        <button onClick={ () => ejecutarPadre('Lucas ' + idhijo) }>Llamar al parent</button>
    </div>)
}

export default SaludoHijo;