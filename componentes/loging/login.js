document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');
    const registerLink = document.getElementById('register-link');
    const errorMessage = document.getElementById('error-message');

    // Mostrar formulario de registro
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        errorMessage.textContent = ''; // Limpiar mensajes de error
    });

    // Manejar el login
    loginButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (!username || !password) {
            errorMessage.textContent = 'Por favor, completa todos los campos.';
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre_usuario: username, contraseña: password })
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem("usuarioAutenticado", true); // Guardar estado de autenticación
                location.reload(); // Recargar la página para mostrar la aplicación
            } else {
                errorMessage.textContent = 'Credenciales incorrectas. ¿No tienes una cuenta? Regístrate.';
            }
        } catch (error) {
            errorMessage.textContent = 'Error al conectar con el servidor. Inténtalo de nuevo más tarde.';
        }
    });

    // Manejar el registro
    registerButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        const email = document.getElementById('register-email').value;

        if (!username || !password || !email) {
            errorMessage.textContent = 'Por favor, completa todos los campos.';
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre_usuario: username, contraseña: password, correo: email })
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem("usuarioAutenticado", true); // Guardar estado de autenticación
                location.reload(); // Recargar la página para mostrar la aplicación
            } else {
                errorMessage.textContent = 'Error en el registro. Inténtalo de nuevo.';
            }
        } catch (error) {
            errorMessage.textContent = 'Error al conectar con el servidor. Inténtalo de nuevo más tarde.';
        }
    });
});