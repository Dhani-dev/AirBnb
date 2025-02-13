const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')

console.log(loggedOutLinks)
console.log(loggedInLinks)

export const loginCheck = user => {
    if (user) {
        loggedInLinks.forEach(link => link.computedStyleMap.display = 'block')
        loggedOutLinks.forEach(link => link.computedStyleMap.display = 'none')
    } else {
        loggedInLinks.forEach(link => link.computedStyleMap.display = 'none')
        loggedOutLinks.forEach(link => link.computedStyleMap.display = 'block')
    }
}