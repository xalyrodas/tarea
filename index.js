import { header } from "./componentes/header/header.js";
import { cargarFormulario } from "./componentes/form/form.js"; 
import { agregarTarea } from "./componentes/form/funcionform.js"; 
import { cargarCarta } from "./componentes/contenido/tarea.js"; // Importar la función para cargar tareas
import "./componentes/loging/login.js"; // Importar la lógica de autenticación

function cargarHeaderYFormulario() {
    const root = document.getElementById("root");

    // Agregar el header
    root.appendChild(header());

    // Crear la sección de contenido
    const seccionContenido = document.createElement("div");
    seccionContenido.className = "seccion_contenido";
    root.appendChild(seccionContenido);

    // Agregar el formulario de agregar tareas
    const formulario = cargarFormulario();
    root.appendChild(formulario);

    // Asociar la funcionalidad de agregar tareas
    agregarTarea(formulario, seccionContenido);

    // Cargar las tareas existentes usando cargarCarta
    cargarCarta().then((seccionTareas) => {
        seccionContenido.appendChild(seccionTareas);
    });
}

function cargarDOM() {
    let DOM = document.getElementById("root");  // Obtenemos el elemento root en el DOM

    // Verificar si el usuario está autenticado
    const usuarioAutenticado = localStorage.getItem("usuarioAutenticado");

    if (!usuarioAutenticado) {
        // Si no está autenticado, mostrar el formulario de login
        const loginForm = document.createElement("div");
        loginForm.innerHTML = `
            <div id="login-form">
                <h2>Login</h2>
                <input type="text" id="login-username" placeholder="Usuario" required>
                <input type="password" id="login-password" placeholder="Contraseña" required>
                <button id="login-button">Entrar</button>
                <a href="#" id="register-link">¿No tienes una cuenta? Regístrate</a>
                <p id="error-message"></p>
            </div>
            <div id="register-form" style="display: none;">
                <h2>Registro</h2>
                <input type="text" id="register-username" placeholder="Usuario" required>
                <input type="email" id="register-email" placeholder="Correo" required>
                <input type="password" id="register-password" placeholder="Contraseña" required>
                <button id="register-button">Guardar</button>
                <p id="error-message"></p>
            </div>
        `;
        DOM.appendChild(loginForm);
    } else {
        // Si está autenticado, cargar el header y el formulario de agregar tareas
        cargarHeaderYFormulario();
    }
}

cargarDOM();  // Llamamos a la función para cargar todo el DOM cuando se cargue la página