// Fetch Request function
export async function onFetch(url) {
    const response = await fetch(url)
    const json = await response.json()
    return json
}

//IP regex validation function
export function validateIPaddress(inputText) {
    const ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (inputText.match(ipformat)) {
        return true;
    }
    else {
        return false;
    }
}


//Fill in fields function (IP, location, timezone and ISP)
export function fillInFields(obj) {
    const ip = document.querySelector('.ip')
    const location = document.querySelector('.location')
    const timezone = document.querySelector('.timezone')
    const isp = document.querySelector('.isp')

    ip.innerHTML = obj.ip
    location.innerHTML = `${obj.location.city}, ${obj.location.region}`
    timezone.innerHTML = `UTC ${obj.location.timezone}`
    isp.innerHTML = obj.isp
}

//Initialize map function
var map;

export function initializeMap(obj) {
    const lat = obj.location.lat
    const lng = obj.location.lng

    if (map === undefined) {

        map = L.map('map').setView([lat, lng], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        L.marker([lat, lng]).addTo(map)
    } else {

        map.remove()
        
        map = L.map('map').setView([lat, lng], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        L.marker([lat, lng]).addTo(map)
    }
}