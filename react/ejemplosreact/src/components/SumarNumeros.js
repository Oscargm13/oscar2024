import mono from './../assets/images/mono.jfif';
import './SumarNumeros';
import '../index'
function SumarNumeros(){
    
    const realizarSuma = (props) => {
        //var suma = num1 + num2;
        const {num1, num2} = props;
        var suma = parseInt(props.num1) + parseInt(props.num2);
        console.log("Suma " + suma);
    }
    return(
        <div>
            <h1>Sumar numeros</h1>
            <img></img>
            <button onClick={ () => realizarSuma(5,6) }>sumar 5 + 6</button>
            <button onClick={ () => realizarSuma(7,7) }>sumar 7 + 7</button>
        </div>
    )
}
export default SumarNumeros;