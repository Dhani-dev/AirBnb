    
export function showMessage(message, type = "success"){
    Toastify({
        text: message,
        duration: 3000,
        destination: "index.html",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: type === "success" ? "green" : "red"
        },
        onClick: function(){} // Callback after click
    }).showToast();
}