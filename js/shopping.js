const paidPropertyId = localStorage.getItem('paidPropertyId');

if (paidPropertyId) {
    fetch('properties.json')
        .then(response => response.json())
        .then(data => {
            const property = data.find(item => item.id === parseInt(paidPropertyId));

            if (property) {
                const cartItem = document.getElementById('cart-item');
                cartItem.innerHTML = `
                    <img src="${property.image}" alt="${property.title}">
                    <h2>${property.title}</h2>
                    <p>Location: ${property.location}</p>
                    <p>Price Paid: $${property.price}</p>
                    <p>Rating: ${property.rating} (based on ${property.reviews} reviews)</p>
                `;
            } else {
                document.getElementById('cart-item').innerHTML = '<p>No se encontró ninguna reserva.</p>';
            }
        })
        .catch(error => console.error('Error al buscar propiedades:', error));
} else {
    document.getElementById('cart-item').innerHTML = '<p>No se encontró ninguna reserva.</p>';
}
