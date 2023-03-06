// OnLoad (DOMContentLoaded) Script

document.addEventListener('DOMContentLoaded', () => {
    async function onLoadFetch(url) {
        const response = await fetch(url)
        const json = await response.json()
        return json
    }

    const res = onLoadFetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_gD1G4vs2yaNkYhx6yU0GkGpHWaPsh")

    res.then(r => {

        const ip = document.querySelector('.ip')
        const location = document.querySelector('.location')
        const timezone = document.querySelector('.timezone')
        const isp = document.querySelector('.isp')

        ip.innerHTML = r.ip
        location.innerHTML = `${r.location.city}, ${r.location.region}`
        timezone.innerHTML = `UTC ${r.location.timezone}`
        isp.innerHTML = r.isp

        const lat = r.location.lat
        const lng = r.location.lng

        var map = L.map('map').setView([lat, lng], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var marker = L.marker([lat, lng]).addTo(map)
    })
})



// OnClick Script

const ipInput = document.getElementById('ip')
const btn = document.querySelector('.btn')

function validateIPaddress(inputText) {
    const ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (inputText.match(ipformat)) {
        return true;
    }
    else {
        return false;
    }
}

async function onClickFetch(url) {
    const response = await fetch(url)
    const json = await response.json()
    return json
}

btn.addEventListener('click', () => {
    inputValue = ipInput.value

    if (validateIPaddress(inputValue)) {
        console.log('ok')
        const res2 = onClickFetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_gD1G4vs2yaNkYhx6yU0GkGpHWaPsh&ipAddress=${inputValue}
        `)
        res2.then(r => {
            const ip = document.querySelector('.ip')
            const location = document.querySelector('.location')
            const timezone = document.querySelector('.timezone')
            const isp = document.querySelector('.isp')

            ip.innerHTML = r.ip
            location.innerHTML = `${r.location.city}, ${r.location.region}`
            timezone.innerHTML = `UTC ${r.location.timezone}`
            isp.innerHTML = r.isp

            const lat = r.location.lat
            const lng = r.location.lng

            map = L.map('map').setView([lat, lng], 13);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            marker = L.marker([lat, lng]).addTo(map)
        })
    } else {
        alert('Entre um valor de IP válido!')
    }

})