import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js"; //Autenticar usuario con correo y contraseña
import { auth } from "./firebase.js";
import {showMessage} from  './showMessage.js'

// Detectar cuando el modal se ha abierto
const observer = new MutationObserver(() => {
    const signupModal = document.getElementById('signupModal');
    if (signupModal) {
        console.log("Modal de registro encontrado en el DOM.");
        initSignupForm();  // Llamar la función cuando se encuentre el modal
        observer.disconnect();  // Dejar de observar cambios en el DOM
    }
});

observer.observe(document.body, { childList: true, subtree: true });

function initSignupForm() {
    const signupForm = document.getElementById('signup-form');

    if (!signupForm) {
        console.error("No se encontró el formulario de registro.");
        return;
    }

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = signupForm['signup-email'].value;
        const password = signupForm['signup-password'].value;

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Usuario creado:", userCredentials);

            //Cierre Modal de registro
            const sigupModal = document.querySelector('#signupModal')
            const modal = bootstrap.Modal.getInstance(sigupModal)
            modal.hide()

            showMessage("Bienvenido " + userCredentials.user.email)

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                showMessage("Correo en uso", "error")
            } else if (error.code === 'auth/invalid-email') {
                showMessage("Email inválido", "error")
            } else if (error.code === 'auth/weak-password') {
                showMessage("Contraseña demasiado débil", "error")
            } else {
                showMessage("Algo salió mal", "error")
            }
        }
    });
}


