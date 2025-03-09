// data.js
export async function obtenerTareas() {
    try {
        const response = await fetch('http://localhost:3000/tareas'); // Asegúrate de que esta URL sea la correcta
        if (!response.ok) {
            throw new Error('Error al obtener las tareas');
        }
        const tareas = await response.json(); // Devuelve las tareas desde el backend
        return tareas;
    } catch (error) {
        console.error('Error al obtener tareas:', error);
        return []; // Devuelve un array vacío en caso de error
    }
}
