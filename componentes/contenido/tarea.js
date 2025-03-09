// tarea.js
import { contenido } from "./contenido.js"; 
import { obtenerTareas } from "./data.js"; // Importar la nueva función para obtener tareas dinámicamente
import { tacharCarta } from "./funcionescontenido.js"; 

export async function cargarCarta() {
    const seccionContenido = contenido(); // Crear la sección de contenido en la página

    try {
        const tareas = await obtenerTareas(); // Obtener las tareas desde el backend

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

            carta.appendChild(checkbox);
            carta.appendChild(texto);
            tacharCarta(carta); // Aplicar la funcionalidad de marcar/desmarcar tarea

            seccionContenido.appendChild(carta); // Agregar la carta a la sección de contenido
        });
    } catch (error) {
        console.error('Error al cargar las tareas:', error);
    }

    return seccionContenido; // Devolver la sección de contenido con las tareas cargadas
}
