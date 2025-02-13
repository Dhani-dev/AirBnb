
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js"
import { auth } from './firebase.js'
import { loginCheck } from './loginCheck.js'

import './signup.js' 
import './logout.js'
import './login.js'


onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
})