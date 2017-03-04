/**
 * Created by krav on 2/28/17.
 */

//
// function initMap() {
//     var uluru = {lat: 34.037765, lng: -118.234135};
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 15,
//         center: uluru
//     });
//     var marker = new google.maps.Marker({
//         position: uluru,
//         map: map
//
//     });
//     map.setOptions({draggable: false, scrollwheel: false});
// }


function initMap() {
    var myLatlng = new google.maps.LatLng(34.037765,-118.234135);
    var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
    var mapOptions = {
        zoom: 11,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    //Callout Content
    var contentString = '1340 E. 6th Street Suite 525, Los Angeles, CA, 90021';
    //Set window width + content
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 500
    });

    //Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: imagePath,
        title: 'image title'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

    //Resize Function
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
    google.maps.event.addListener(map, 'mouseout', function(event){
        this.setOptions({scrollwheel:false});
    });
}




