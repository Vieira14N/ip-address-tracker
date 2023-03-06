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
        location.innerHTML = `${r.location.city},${r.location.region}`
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

