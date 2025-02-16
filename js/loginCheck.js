const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')

console.log(loggedOutLinks)
console.log(loggedInLinks)

export const loginCheck = user => {
    if (user) {
        // Si el usuario está logueado, mostrar enlaces para usuarios logueados y ocultar los demás
        loggedInLinks.forEach(link => link.computedStyleMap.display = 'block')
        loggedOutLinks.forEach(link => link.computedStyleMap.display = 'none')
    } else {
        // Si el usuario no está logueado, mostrar enlaces para usuarios no logueados y ocultar los demás
        loggedInLinks.forEach(link => link.computedStyleMap.display = 'none')
        loggedOutLinks.forEach(link => link.computedStyleMap.display = 'block')
    }
}