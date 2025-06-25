const apiRequest = "https://api.openweathermap.org/data/2.5/weather?appid=2447ea00466fe08fc2368d6239b31211";
const headTemp = document.querySelector('.temp');
const img = document.querySelector('.img');
const headHumd = document.querySelector('.humd');
const headWind = document.querySelector('.wind');
const cityName = document.querySelector('.city-name')

document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('.input');
    const btn = document.querySelector('#btn');

    input.addEventListener('keydown', function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            makeRequest(input);
        }
    });

    btn.addEventListener('click', () => makeRequest());
});

function makeRequest() {
    const city = input.value;
    const newApiRequest = `https://api.openweathermap.org/data/2.5/weather?appid=2447ea00466fe08fc2368d6239b31211&q=${city}&units=metric`;

    fetch(newApiRequest)
        .then(res => res.json())
        .then(data => {
            headTemp.innerHTML = `${Math.round(data.main.temp)}°C`;
            img.src = `${data.weather[0].main.toLowerCase()}.png`;
            headHumd.innerHTML = `${Math.round(data.main.humidity)}%`;
            headWind.innerHTML = `${Math.round(data.wind.speed)} km/h`
            cityName.innerText =  data.name;
        })
        .catch(err => console.error("Eroare la fetch:", err));
}
