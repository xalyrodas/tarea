// funcionform.js
import { tacharCarta } from "../contenido/funcionescontenido.js"; 
import { obtenerTareas } from "../contenido/data.js"; // Importar obtenerTareas para actualizar la lista después de agregar una tarea

export function agregarTarea(formulario, seccionContenido) {
    formulario.addEventListener("submit", async (evento) => {
        evento.preventDefault(); // Evitar el comportamiento por defecto del formulario

        const inputTarea = formulario.querySelector(".input-tarea");
        const nuevaTarea = inputTarea.value.trim(); // Obtener el valor de la nueva tarea

        if (nuevaTarea) { 
            try {
                // Enviar la nueva tarea al backend para guardarla en la base de datos
                const response = await fetch('http://localhost:3000/tareas', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nombre_tarea: nuevaTarea,
                        estado: 'falso', // El estado inicial puede ser 'falso' o cualquier valor que se ajuste a tu modelo
                    }),
                });

                if (!response.ok) {
                    throw new Error('Error al agregar la tarea');
                }

                // Limpiar el campo de entrada
                inputTarea.value = "";

                // Opcional: Si quieres que la interfaz se actualice con todas las tareas después de agregar una
                const tareas = await obtenerTareas(); // Obtener las tareas actualizadas desde el backend
                seccionContenido.innerHTML = ""; // Limpiar el contenido actual

                // Volver a cargar todas las tareas
                tareas.forEach(item => {
                    const carta = document.createElement("div");
                    carta.className = "carta";

                    const checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.className = "checkbox";

                    const texto = document.createElement("span");
                    texto.className = "texto";
                    texto.textContent = item.nombre_tarea;

                    carta.appendChild(checkbox);
                    carta.appendChild(texto);
                    tacharCarta(carta); // Aplicar la funcionalidad de marcar/desmarcar tarea

                    seccionContenido.appendChild(carta); // Agregar la carta con la nueva tarea a la sección
                });

            } catch (error) {
                console.error('Error al agregar la tarea:', error);
            }
        }
    });
}
