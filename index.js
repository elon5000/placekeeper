// Initialize and add the map
function initMap() {

    const userPref = getUserPref()
    const zoom = +userPref.zoomFactor || 4
    const centerLoc = getUserPrefLoc() || { lat: 32.794044, lng: 34.989571 }
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom,
        center: centerLoc,
    })

    const marker = new google.maps.Marker({
        position: centerLoc,
        map: map,
    })

    map.addListener("click", (e) => {
        placeMarkerAndPanTo(e.latLng, map)
    })

    function placeMarkerAndPanTo(latLng, map) {
        console.log('latLng:', latLng)
        const name = prompt('Marker name?')
        new google.maps.Marker({
            name,
            position: latLng,
            map: map,
        });
        map.panTo(latLng)
    }

}

window.initMap = initMap;