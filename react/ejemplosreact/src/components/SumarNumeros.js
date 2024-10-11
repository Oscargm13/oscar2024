import mono from './../assets/mono.jfif';
function SumarNumeros(){
    const realizarSuma = (num1, num2) => {
        var suma = num1 + num2;
        console.log("Suma " + suma);
    }
    return(
        <div>
            <button onClick={ () => realizarSuma(5,6) }>sumar 5 + 6</button>
            <button onClick={ () => realizarSuma(7,7) }>sumar 7 + 7</button>
        </div>
    )
}
export default SumarNumeros;