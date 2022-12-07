'use strict'

function onInitUserPref() {
    renderUserPref()
    renderPreferencesInputs()
}

function onSetUserPref(ev) {
    ev.preventDefault()
    const elForm = ev.target
    const elInputs = Array.from(elForm.querySelectorAll('input'))
    const userPref = elInputs.reduce((acc, elInput) => {
        if (elInput.id && elInput.value) acc[elInput.id] = elInput.value
        return acc
    }, {})
    setUserPref(userPref)
    renderUserPref(userPref)
}

function renderUserPref() {
    const userPref = getUserPref()
    const elMain = document.querySelector('main')
    elMain.style.backgroundColor = userPref.bgColor
    elMain.style.color = userPref.fontColor
    document.querySelector('.first-name').innerText = userPref.fName
}

function renderPreferencesInputs() {
    const userPref = getUserPref()
    for (const id in userPref) {
        const el = document.getElementById(id)
        if (userPref[id]) el.value = userPref[id]
    }
}