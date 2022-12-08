'use strict'

const USER_PREF_KEY = 'user_pref_db'

let gUserPref = loadFromLocalStorage(USER_PREF_KEY)

function getUserPref() {
    return gUserPref
}

function getUserPrefLoc() {
    const locs = gUserPref.startLocation.split(',')
    console.log(locs)
    return {
        lat: +locs[0],
        lng: +locs[1]
    }

}

function setUserPref(userPref) {
    gUserPref = userPref
    saveToLocalStorage(USER_PREF_KEY, userPref)
}