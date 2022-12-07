'use strict'

function onInit() {
    console.log('Initalizing user prefernces...')
    const userPref = getUserPref()
    if (userPref) renderUserPref(userPref)
}