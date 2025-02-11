import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js"
import { auth } from "./firebase"

const signupForm = document.querySelector('#signup-form');
 
signupForm.addEventListener('submit', async (e)=>{
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value
    
    try{
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    }catch(error)
    {

        if (error.code === 'auth/email-already-in-use'){
            alert('Correo en uso')
        }
        else if (error.code === 'auth/invalid-email'){
            alert('Email inválido')
        }
        else if (error.code === 'auth/weak-password'){
            alert('Contraseña demasiado débil')
        }
        else if (error.code){
            alert('Algo salió mal')
        }

    }
    

})