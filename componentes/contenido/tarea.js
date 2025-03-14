// tarea.js
import { contenido } from "./contenido.js"; 
import { obtenerTareas } from "./data.js"; // Importar la nueva función para obtener tareas dinámicamente
import { tacharCarta } from "./funcionescontenido.js"; 


export async function cargarCarta() {
    // Crear la sección de contenido en la página
    const seccionContenido = contenido(); 

    try {
        // Obtener las tareas desde el backend
        const tareas = await obtenerTareas(); 

        // Verificar si hay tareas
        if (tareas.length === 0) {
            const mensaje = document.createElement("p");
            mensaje.textContent = "No hay tareas disponibles.";
            seccionContenido.appendChild(mensaje);
            return seccionContenido; // Devolver la sección de contenido con el mensaje
        }

        // Iterar sobre las tareas y agregarlas a la página
        tareas.forEach(item => {
            const carta = document.createElement("div");
            carta.className = "carta";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "checkbox";

            const texto = document.createElement("span");
            texto.className = "texto";
            texto.textContent = item.nombre_tarea; // Usar el nombre de la tarea desde la base de datos

            // Agregar el checkbox y el texto a la carta
            carta.appendChild(checkbox);
            carta.appendChild(texto);

            // Aplicar la funcionalidad de marcar/desmarcar tarea
            tacharCarta(carta); 

            // Agregar la carta a la sección de contenido
            seccionContenido.appendChild(carta); 
        });
    } catch (error) {
        console.error('Error al cargar las tareas:', error);

        // Mostrar un mensaje de error en caso de fallo
        const mensajeError = document.createElement("p");
        mensajeError.textContent = "Error al cargar las tareas. Inténtalo de nuevo más tarde.";
        mensajeError.style.color = "red";
        seccionContenido.appendChild(mensajeError);
    }

    // Devolver la sección de contenido con las tareas cargadas
    return seccionContenido; 
}