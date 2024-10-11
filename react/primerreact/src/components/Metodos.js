function Metodos()
{
    const mostrarMensaje = () =>{
        //Accionres del metodo
        console.log("Boton pulsado!!!");

    }

    return (
        <div>
            <h1>Ejemplo metodos</h1>
            {mostrarMensaje()}
            <button onClick={() => mostrarMensaje() }>Pulsa para cosas...</button>
        </div>
    )
}

export default Metodos;