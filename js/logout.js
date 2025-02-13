import { signOut } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js"
import { auth } from './firebase.js'

const observer = new MutationObserver(() => {
    const logout = document.querySelector('#logout');
    if (logout) {
        console.log('Botón de logout encontrado.');
        logout.addEventListener('click', async () => {
            await signOut(auth)
            sessionStorage.removeItem("userLogged")
            console.log('user signed out');
        });
        observer.disconnect(); // Dejar de observar cambios en el DOM
    }
});

observer.observe(document.body, { childList: true, subtree: true });
