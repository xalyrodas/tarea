import { Data } from "../contenido/data.js"; 
import { tacharCarta } from "../contenido/funcionescontenido.js"; 

export function agregarTarea(formulario, seccionContenido) {
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault(); 

        const inputTarea = formulario.querySelector(".input-tarea");
        const nuevaTarea = inputTarea.value.trim(); 

        if (nuevaTarea) { 
           const datos = Data();
            datos.push(nuevaTarea);
            inputTarea.value = "";
            
            const carta = document.createElement("div");
            carta.className = "carta"; 

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "checkbox"

            const texto = document.createElement("span");
            texto.className = "texto";
            texto.textContent = nuevaTarea;
            carta.appendChild(checkbox);
            carta.appendChild(texto);
            tacharCarta(carta);
            seccionContenido.appendChild(carta);
        }
    });
}