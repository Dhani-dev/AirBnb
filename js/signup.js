import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
import { auth } from "./firebase.js";

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
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Correo en uso');
            } else if (error.code === 'auth/invalid-email') {
                alert('Email inválido');
            } else if (error.code === 'auth/weak-password') {
                alert('Contraseña demasiado débil');
            } else {
                alert('Algo salió mal');
            }
        }
    });
}


