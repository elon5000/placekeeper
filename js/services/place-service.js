'use strict'

const PLACE_STORAGE_KEY = 'place_db'

let gPlaces = loadFromLocalStorage(PLACE_STORAGE_KEY) || _createPlaces()

function getPlaces() {
    return gPlaces
}

function removePlace(placeId) {
    const placeIdx = gPlaces.findIndex(place => place._id === placeId)
    gPlaces.splice(placeIdx, 1)
    saveToLocalStorage(PLACE_STORAGE_KEY, gPlaces)
}

function addPlace(name, latLng) {
    const place = _createPlace(name, {lat: latLng.lat(), lng: latLng.lng()})
    gPlaces.unshift(place)
    saveToLocalStorage(PLACE_STORAGE_KEY, gPlaces)
}

function _createPlaces() {
    return [
        _createPlace('Tel aviv', { lat: 32.0853, lng: 34.7818 }),
        _createPlace('Jerusalem', { lat: 31.7683, lng: 35.2137 }),
        _createPlace('Kiryat Shmona', { lat: 33.2079, lng: 35.5702 }),
    ]
}

function _createPlace(name, latLng) {
    const { lat,lng } = latLng
    return {
        _id: makeId(),
        name,
        lat,
        lng
    }
}