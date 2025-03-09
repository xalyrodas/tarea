import { header } from "./componentes/header/header.js";
import { cargarFormulario } from "./componentes/form/form.js"; 
import { agregarTarea } from "./componentes/form/funcionform.js"; 

function consultarTareasBackend() {
    fetch('http://localhost:3000/tareas')  // Hacemos una solicitud GET al backend
        .then(response => response.json())  // Convertimos la respuesta en formato JSON
        .then(tareas => {
            console.log("Tareas obtenidas:", tareas);
            const seccionContenido = document.querySelector(".seccion_contenido");
            seccionContenido.innerHTML = "";  // Limpiamos la sección de tareas antes de agregar nuevas

            tareas.forEach(tarea => {  // Recorremos las tareas obtenidas
                const carta = document.createElement("div");
                carta.className = "carta";  // Establecemos la clase para cada tarea

                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.className = "checkbox";
                checkbox.checked = tarea.estado === "verdadero";  // Marcamos el checkbox si la tarea está completada

                const texto = document.createElement("span");
                texto.className = "texto";
                texto.textContent = tarea.nombre_tarea;  // Establecemos el texto de la tarea

                carta.appendChild(checkbox);  // Añadimos el checkbox a la carta
                carta.appendChild(texto);  // Añadimos el texto a la carta
                seccionContenido.appendChild(carta);  // Añadimos la carta a la sección de contenido
            });
        })
        .catch(error => console.error("Error al obtener tareas:", error));  // Manejamos cualquier error
}

function cargarDOM() {
    let DOM = document.getElementById("root");  // Obtenemos el elemento root en el DOM
    DOM.appendChild(header());  // Añadimos el header a la página

    const seccionContenido = document.createElement("div");
    seccionContenido.className = "seccion_contenido";  // Creamos la sección de contenido donde se mostrarán las tareas
    DOM.appendChild(seccionContenido);

    const formulario = cargarFormulario();  // Cargamos el formulario para agregar tareas
    DOM.appendChild(formulario);  // Añadimos el formulario a la página
    agregarTarea(formulario, seccionContenido);  // Asociamos la funcionalidad para agregar tareas

    consultarTareasBackend();  // Cargamos las tareas desde el backend al inicio
}

cargarDOM();  // Llamamos a la función para cargar todo el DOM cuando se cargue la página
