
// Инициализация гугл карты

function initMap() {
    // The location of Uluru
    var geocoder = new google.maps.Geocoder();
    var uluru = {lat: 55.7498598, lng: 37.352323};
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

    // Лишний кусок
    // geocoder.geocode( { 'address': '{{ destination }}' }, function (results, status) {
    //     if (status == 'OK') {
    //         map.setCenter(results[0].geometry.location);
    //         var marker = new google.maps.Marker({
    //             map: map,
    //             position: results[0].geometry.location
    //         });
    //     } else {
    //         document.getElementById('map').style.display = 'none';
    //     }
    // });

}