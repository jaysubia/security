/**
 * Created by krav on 2/28/17.
 */


function initMap() {
    var uluru = {lat: 34.037765, lng: -118.234135};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map

    });
    map.setOptions({draggable: false, scrollwheel: false});
}

