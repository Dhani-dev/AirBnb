document.addEventListener("DOMContentLoaded", function () {
    const purchaseDetails = document.getElementById("purchase-details");

    // Verificar si el usuario está logueado
    const userLogged = sessionStorage.getItem("userLogged");

    if (userLogged) {
        // Obtener la lista de reservas desde localStorage
        const reservations = JSON.parse(localStorage.getItem("reservations")) || [];

        if (reservations.length > 0) {
            // Cargar el archivo properties.json
            fetch("../db/properties/properties.json")
                .then((response) => response.json())
                .then((properties) => {
                    let content = "";

                    // Filtrar las propiedades reservadas
                    const reservedProperties = properties.filter(property => reservations.includes(property.id));

                    if (reservedProperties.length > 0) {
                        // Mostrar los detalles de todas las propiedades reservadas
                        reservedProperties.forEach((property) => {
                            content += `
                                <div class="reservation-item mb-4 p-3 border rounded">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <img src="${property.image}" alt="${property.title}" class="img-fluid">
                                        </div>
                                        <div class="col-md-8">
                                            <h4>${property.title}</h4>
                                            <p><strong>Ubicación:</strong> ${property.location}</p>
                                            <p><strong>Precio:</strong> $${property.price}</p>
                                            <p><strong>Días de disponibilidad:</strong> ${property.availability}</p>
                                            <p><strong>Capacidad:</strong> ${property.capacity} personas</p>
                                            <p><strong>Calificación:</strong> ${property.rating} (${property.reviews} reseñas)</p>
                                            <button class="btn btn-danger btn-sm remove-reservation" data-property-id="${property.id}">Eliminar</button>
                                        </div>
                                    </div>
                                </div>
                            `;
                        });
                    } else {
                        content = "<p>No se encontraron detalles de las reservas.</p>";
                    }

                    purchaseDetails.innerHTML = content;
                })
                .catch((error) => {
                    console.error("Error al cargar los detalles de las propiedades:", error);
                    purchaseDetails.innerHTML = "<p>Error al cargar los detalles de las reservas.</p>";
                });
        } else {
            purchaseDetails.innerHTML = "<p>No se encontraron reservas.</p>";
        }
    } else {
        // Si el usuario no está logueado, mostrar un mensaje
        purchaseDetails.innerHTML = "<p>No hay reservas disponibles. Por favor, inicia sesión.</p>";
    }
});

// Agregar evento para eliminar reservas
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-reservation")) {
        const propertyId = event.target.getAttribute("data-property-id");
        let reservations = JSON.parse(localStorage.getItem("reservations")) || [];
        reservations = reservations.filter(id => id != propertyId);
        localStorage.setItem("reservations", JSON.stringify(reservations));
        alert("Reserva eliminada.");
        location.reload(); // Recargar la página para actualizar la lista
    }
});