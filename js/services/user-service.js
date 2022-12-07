'use strict'

const USER_PREF_KEY = 'user_pref_db'

let gUserPref = loadFromLocalStorage(USER_PREF_KEY)

function getUserPref() {
    return gUserPref
}

function setUserPref(userPref) {
    gUserPref = userPref
    saveToLocalStorage(USER_PREF_KEY, userPref)
}