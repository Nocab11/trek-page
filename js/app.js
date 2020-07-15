// Инициализация гугл карты
function initMap() {
    // The location of Uluru
    var geocoder = new google.maps.Geocoder();
    var uluru = {lat: 55.711655, lng: 37.581496};
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
    var infoWnd = new google.maps.InfoWindow({
        content: `               
                    <div class="t-schedule__work">
                        <span class="t-main-name">График работы:</span>
                        <span class="t-main-description">пн-пт 10:00 - 20:00</span>
                        <span class="t-main-description">сб-вс 10:00 - 16:00</span>
                    </div>
                     <div class="t-schedule__tel">
                        <span class="t-main-name">Телефон для связи:</span>
                        <span class="t-main-description">8-499-390-58-53</span>
                    </div>                    
                `,
    });
    infoWnd.open(map, marker);
}

// Открытие тултипа
function tooltipHandler () {
    let toolTip = document.querySelector('.js-t-tooltip');
    toolTip.addEventListener('click', function () {
        document.querySelector('.t-tooltip-block').classList.toggle('t-tooltip_hidden');
    });
}

tooltipHandler();
