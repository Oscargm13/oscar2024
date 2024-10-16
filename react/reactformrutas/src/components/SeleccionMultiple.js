import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
    selectMultiple = React.createRef();
    state = {
        seleccionados: ""
    }
    mostrarMultiples = (e) => {
        e.preventDefault();
        //DENTRO DE UN SELECT MULTIPLE TENEMOS UN ARRAY CON TODAS LAS OPCIONES
        let options = this.selectMultiple.current.options;
        let datos = "";
        //CADA OBJ OPTION DENTRO DEL ARRAY CONTIENE UN ATRIBUTO VALUE PARA SABER SI ESTA SELECCIONADO
        for (var option of options){
            if(option.selected == true){
                datos += option.value + " ";
            }
        }
        //MODIFICAMOS EL STATE
        this.setState({
            seleccionados: datos
        })
    }
  render() {
    return (
      <div>
        <h1>Seleccion Multiple</h1>
        <h2 style={{color:"blue"}}>{this.state.seleccionados}</h2>
        <form onSubmit={this.mostrarMultiples}>
            <select size={10} ref={this.selectMultiple} multiple>
                <option>Elemento 1</option>
                <option>Elemento 2</option>
                <option>Elemento 3</option>
                <option>Elemento 4</option>
                <option>Elemento 5</option>
                <option>Elemento 6</option>
                <option>Elemento 7</option>
            </select>
            <button>Mostrar seleccionados</button>
        </form>
      </div>
    )
  }
}
