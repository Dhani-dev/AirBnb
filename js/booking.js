document.addEventListener("DOMContentLoaded", function () {
    fetch("booking.html") // Asegúrate de que la ruta sea correcta
        .then(response => response.text())
        .then(data => {
            document.getElementById("booking-container").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el módulo de reservas:", error));
});
