function initMap() { 
    const location = {lat: 56.010443, lng: 37.471147};
    const map = new google.maps.Map(document.getElementById("map-google"), {
        mapId: "2d57d8392a925fa5",
        center: location,
        zoom: 13,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: {
            url: "css/marker.png",
        }
    })
}

ymaps.ready(init);
function init(){
    const loc = [56.010443, 37.471147]
    var myMap = new ymaps.Map("map-yandex", {
        center: loc,
        zoom: 13
    });
    var myPlacemark = new ymaps.Placemark(loc, {}, {
        iconImageHref: 'css/marker.png',
        iconLayout: 'default#image',
        iconImageSize: [49, 64],
        iconImageOffset: [-23, -58]
    });
    myMap.geoObjects.add(myPlacemark)
}
