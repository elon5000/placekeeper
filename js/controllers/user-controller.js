'use strict'

function onSetUserPref(ev) {
    ev.preventDefault()
    const elForm = ev.target
    const elInputs = Array.from(elForm.querySelectorAll('input'))
    const userPref = elInputs.reduce((acc, elInput) => {
        if (elInput.id && elInput.value) acc[elInput.id] = elInput.value
        return acc
    }, {})
    setUserPref(userPref)
}