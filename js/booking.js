document.addEventListener("DOMContentLoaded", function () {
    fetch("booking.html") // Asegúrate de que la ruta sea correcta
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("booking-container").innerHTML = data;
        })
        .catch((error) =>
            console.error("Error al cargar el módulo de reservas:", error)
        );
});

$(document).ready(function () {
    const $propertiesContainer = $("#properties-container");

    // Load properties dynamically
    function loadProperties(destination, days=1) {
        $.getJSON("../db/properties/properties.json", function (properties) {
            let content = "";

            // If there are filters, take the properties that match
            if (destination && days){
                properties = properties.filter(
                    (property) =>
                        ( property.location.toLowerCase().includes(destination.toLowerCase()) ||
                        property.title.toLowerCase().includes(destination.toLowerCase()) ) &&
                        property.availability >= days
                );
            }

            properties.forEach((property) => {
                content += `
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="package-item bg-white mb-2">
                            <img class="img-fluid" src="${property.image}" alt="">
                            <div class="p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i
                                        class="fa fa-map-marker-alt text-primary mr-2"></i>${property.location}</small>
                                    <small class="m-0"><i
                                        class="fa fa-calendar-alt text-primary mr-2"></i>${property.availability} days</small>
                                    <small class="m-0"><i
                                        class="fa fa-user text-primary mr-2"></i>${property.capacity} Person</small>
                                </div>
                                <a class="h5 text-decoration-none" href="">${property.title}</a>
                                <div class="border-top mt-4 pt-4">
                                    <div
                                        class="d-flex justify-content-between align-items-center">
                                        <h6 class="m-0"><i
                                            class="fa fa-star text-primary mr-2"></i>${property.rating}
                                            <small>${property.reviews}</small></h6>
                                        <h5 class="m-0">$${property.price}</h5>
                                        <button id='bookTour'
                                            class="btn btn-primary">Book now</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
            $propertiesContainer.html(content);
        });
    }

    loadProperties();

    // Handle the submit of the search form. Filtering the properties
    $(document).on("submit", "#search-form", function(event) {
        event.preventDefault();
        let destination = $("#destination").val() ;
        let days = $("#days").val();
        if ( isNaN(days) ) days = 1;

        console.log(destination, days)

        loadProperties(destination, days)
    });

});
