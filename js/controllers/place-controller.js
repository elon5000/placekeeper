'use strict'

let gMap

function onInitMapPage() {
    initMap()
    renderUserPref()
    _renderPlaces()
    _renderMarkers()
}

function onPanTo(latLng) {
    gMap.panTo(latLng)
}

function onRemovePlace(ev, placeId) {
    ev.preventDefault()
    removePlace(placeId)
    _renderPlaces()
}

function initMap() {
    const userPref = getUserPref()
    const zoom = +userPref.zoomFactor || 4
    const centerLoc = getUserPrefLoc() || { lat: 32.794044, lng: 34.989571 }
    gMap = new google.maps.Map(document.getElementById("map"), {
        zoom,
        center: centerLoc,
    })
    gMap.addListener("click", (ev) => {
        placeMarkerAndPanTo(ev.latLng, gMap)
    })
}

function placeMarkerAndPanTo(latLng, map) {
    const name = prompt('Marker name?')
    addPlace(name, latLng)
    _renderMarkers()
    _renderPlaces()
    map.panTo(latLng)
}

function _renderMarkers() {
    const places = getPlaces()
    places.forEach(place => {
        new google.maps.Marker({
            name: place.name,
            position: { lat: place.lat, lng: place.lng },
            map: gMap,
        })
    })
}

function _renderPlaces() {
    const places = getPlaces()
    const elPlaceList = document.querySelector('.place-list')
    const strHTMLs = places.map(place => {
        return `<li class="flex row place" onclick="onPanTo({lat:${place.lat}, lng:${place.lng}})">
        <span>${place.name}</span>
        <div class="flex column">
        <span>${Math.ceil(place.lat)}</span>
        <span>${Math.ceil(place.lng)}</span>
        </div>
        <button onclick="onRemovePlace(event, '${place._id}')">✕</button>
        </li>`
    })
    elPlaceList.innerHTML = strHTMLs.join('')
}