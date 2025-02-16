import { signOut } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js"
import { auth } from './firebase.js'

const observer = new MutationObserver(() => {
    const logout = document.querySelector('#logout');
    if (logout) {
        console.log('Botón de logout encontrado.');
        logout.addEventListener('click', async () => {
            try {
                await signOut(auth); // Cerrar sesión en Firebase
                sessionStorage.removeItem("userLogged"); // Eliminar el estado de sesión
                console.log('Usuario cerró sesión.');
                window.location.href = "index.html";

                //Limpiar el contenido de shopping
                const purchaseDetails = document.getElementById("purchase-details");
                if (purchaseDetails) {
                    purchaseDetails.innerHTML = "<p>No hay reservas disponibles. Por favor, inicia sesión.</p>";
                }

                // Redirigir al usuario a la página de inicio de sesión
                window.location.href = "index.html"; // Cambia "index.html" por la página que desees
            } catch (error) {
                console.error("Error al cerrar sesión:", error);
            }
        });
        observer.disconnect(); // Dejar de observar cambios en el DOM
    }
});

observer.observe(document.body, { childList: true, subtree: true });
