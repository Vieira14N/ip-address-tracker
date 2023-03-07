import {
    onFetch,
    validateIPaddress,
    fillInFields,
    initializeMap,
} from './functions.js'

// OnLoad (DOMContentLoaded) Script
document.addEventListener('DOMContentLoaded', () => {

    const response = onFetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_gD1G4vs2yaNkYhx6yU0GkGpHWaPsh")

    response.then(r => {
        fillInFields(r)
        initializeMap(r)
    })
})

// OnClick Script
const ipInput = document.getElementById('ip')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    const inputValue = ipInput.value

    if (validateIPaddress(inputValue)) {
        const response2 = onFetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_gD1G4vs2yaNkYhx6yU0GkGpHWaPsh&ipAddress=${inputValue}`)

        response2.then(r => {
            fillInFields(r)
            initializeMap(r)
        })
    } else {
        alert('Entre um valor de IP válido!')
    }

})

