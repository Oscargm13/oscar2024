import "bootstrap/dist/css/bootstrap.min.css"
import $ from 'jquery'
import Popper from 'popper.js'
import "bootstrap/dist/js/bootstrap.bundle"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServicioCustomers from './components/ServicioCustomers';
import BuscadorCustomer from './components/BuscadorCustomer';
import BuscarCoches from './components/BuscarCoches';
import DepartamentosEmpleados from './components/DepartamentosEmpleados';
import EmpleadosOficio from './components/EmpleadosOficio';
import Departamentos from './components/maestrodetalle/Departamentos';
import DepartamentoEmpleados_II from './components/DepartamentoEmpleados_II';
import TablaMultiplicar from './components/TablaMultiplicar';
import Router from './components/Router';
import MenuRutas from './components/MenuRutas';
import Doctores from "../../reactdoctoreshospital/src/components/Doctores";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
	<Doctores idhospital="22"/>
</div>
	
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
