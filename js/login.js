import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js"; //Autenticar usuario con correo y contraseña
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";


const observer = new MutationObserver(() => {
    const signInForm = document.querySelector("#login-form");

    if (signInForm) {
        console.log("Formulario de login encontrado.");
        
        signInForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const email = signInForm["signin-email"].value;
            const password = signInForm["signin-password"].value;

            try {
                const credentials = await signInWithEmailAndPassword(auth, email, password);
                console.log("Usuario autenticado:", credentials);

                const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
                modal.hide()

                showMessage('Welcome '+ credentials.user.email)

            } catch (error) {
                if (error.code === "auth/wrong-password") {
                    showMessage("Contraseña incorrecta", "error");
                } else if (error.code === "auth/user-not-found") {
                    showMessage("Usuario no encontrado", "error");
                } else {
                    showMessage(error.message, "error");
                }
            }
        });

        observer.disconnect(); // Detenemos la observación una vez encontrado el formulario
    }
});

observer.observe(document.body, { childList: true, subtree: true });

/*
const signInForm = document.querySelector('#login-form');

signInForm.addEventListener('submit', async e => {
    e.preventDefault()

    const email = signInForm['signin-email'].value;
    const password = signInForm['signin-password'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)
    } catch (error) {
        if (error.code === "auth/wrong-password"){
            showMessage('Contraseña incorrecta', 'error')
        } else if (error.code === "auth/user-not-found") {
            showMessage('Usuario no encontrado', 'error')
        } else {
            showMessage(error.message, 'error')
        }
    }
}); */
