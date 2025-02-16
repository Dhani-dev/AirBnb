$(document).on("click", "#bookTour", function() {
    // Obtener el ID de la propiedad
    const propertyId = $(this).closest('.package-item').data('property-id');
    
    // Guardar el ID de la propiedad en sessionStorage ojito
    //sessionStorage.setItem("purchasedPropertyId", propertyId); ojito

    // Obtener la lista actual de reservas desde localStorage
    let reservations = JSON.parse(localStorage.getItem("reservations")) || [];

    // Agregar la nueva reserva a la lista
    if (!reservations.includes(propertyId)) {
        reservations.push(propertyId);
    }

    // Guardar la lista actualizada en localStorage
    localStorage.setItem("reservations", JSON.stringify(reservations));

    console.log("Reservations updated:", reservations); // Depuración

    // If user is not logged in
    if (!sessionStorage.getItem("userLogged")) {
        $("#signinModal").modal("show");
        return
    }
    $("#paymentModal").modal("show");
});

document.getElementById("payNow").addEventListener("click", function () {
    const cardNumber = document.getElementById("cardNumber").value.trim().replaceAll(" ", "");
    const expirationDate = document.getElementById("expirationDate").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    // Regular expressions for validation
    const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
    const cvvRegex = /^\d{3,4}$/; // 3 or 4-digit CVV

    // Check if all fields are filled
    if (!cardNumber || !expirationDate || !cvv) {
        alert("Por favor, rellene todos los campos obligatorios.");
        return;
    }

    // Validate card number
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        alert("Número de tarjeta no válido. Debe tener 16 dígitos.");
        return;
    }

    // Validate expiration date
    if (!expirationDateRegex.test(expirationDate) || !isFutureDate(expirationDate)) {
        alert("Fecha de vencimiento no válida. Utilice el formato MM/AA y asegúrese de que sea una fecha futura..");
        return;
    }

    // Validate CVV
    if (!cvvRegex.test(cvv)) {
        alert("CVV no válido. Debe tener 3 o 4 dígitos.");
        return;
    }

    // If all validations are correct, proceed with payment
    $("#paymentModal").modal("hide");

    setTimeout(() => {
        alert("Payment completed successfully!");
        // Redirigir a la página de compra
        window.location.href = "shopping.html";
    }, 100);
});

// Function to check if expiration date is in the future
function isFutureDate(expDate) {
    const [month, year] = expDate.split("/").map(Number);
    const currentYear = new Date().getFullYear() % 100; // Get last two digits of the year
    const currentMonth = new Date().getMonth() + 1; // Months are 0-based

    if (year > currentYear || (year === currentYear && month >= currentMonth)) {
        return true;
    }
    return false;
}