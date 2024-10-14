import Matematicas from "./Matematicas";

function PadreMatematicas(){

    const triple = (num1) => {
        console.log(num1 * 3);
    }
    return(
        <div>
            <h1>PADRE</h1>
            <Matematicas numero="5" triple={triple}/>
        </div>
    )
}

export default PadreMatematicas;