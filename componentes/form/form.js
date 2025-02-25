 function cargarFormulario() {
    const formulario = document.createElement("form");
    formulario.className = "formulario";

   
    const inputTarea = document.createElement("input");
    inputTarea.type = "text";
    inputTarea.placeholder = "Escribe una nueva tarea";
    inputTarea.className = "input-tarea";


    const botonAgregar = document.createElement("button");
    botonAgregar.type = "submit";
    botonAgregar.textContent = "Agregar Tarea";
    botonAgregar.className = "boton-agregar";


    formulario.appendChild(inputTarea);
    formulario.appendChild(botonAgregar);

    return formulario;
}
export{cargarFormulario}