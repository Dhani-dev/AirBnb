const container = document.querySelector('.container-login');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const loginForm = document.querySelector('.form-box.login form'); // Captura el formulario de login
const registerForm = document.querySelector('.form-box.register form');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    window.location.href = 'ProfileUser.html'; // Redirige al perfil del usuario
});

registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    window.location.href = 'login.html'; // Redirige al perfil del usuario
});

document.querySelector('.btn-return-home').addEventListener('click', function(){
    window.location.href = 'index.html';
 })



