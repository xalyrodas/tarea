import { header } from "./componentes/header/header.js";
import { cargarCarta } from "./componentes/contenido/tarea.js";
import { cargarFormulario } from "./componentes/form/form.js"; 
import { agregarTarea } from "./componentes/form/funcionform.js"; 

function cargarDOM() {
    let DOM = document.getElementById("root");
    DOM.appendChild(header());
    const seccionContenido = cargarCarta(); 
    DOM.appendChild(seccionContenido);
    const formulario = cargarFormulario(); 
    DOM.appendChild(formulario);
    agregarTarea(formulario, seccionContenido);
}


cargarDOM();