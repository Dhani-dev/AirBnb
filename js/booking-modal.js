$(document).on("click", "#bookTour", function() {
    // If user is not logged in
    if (!localStorage.getItem("userLogged")) {
        window.location.href = "login.html";
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
        alert("Please fill in all required fields.");
        return;
    }

    // Validate card number
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        alert("Invalid card number. It should be 16 digits.");
        return;
    }

    // Validate expiration date
    if (!expirationDateRegex.test(expirationDate) || !isFutureDate(expirationDate)) {
        alert("Invalid expiration date. Use MM/YY format and ensure it's a future date.");
        return;
    }

    // Validate CVV
    if (!cvvRegex.test(cvv)) {
        alert("Invalid CVV. It should be 3 or 4 digits.");
        return;
    }

    // If all validations are correct, proceed with payment
    $("#paymentModal").modal("hide");

    setTimeout(() => {
        alert("Payment completed successfully!");
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