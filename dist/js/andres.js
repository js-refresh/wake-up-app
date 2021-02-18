document.addEventListener('DOMContentLoaded', function () {
    const weatherContainer = document.querySelector(".weather");
    let zipcode = 77010;
    fetch(`http://api.openweathermap.org/data/2.5/weather?&units=imperial&zip=${zipcode},us&appid=16b98922cbf6a3314343414c043da48e`)
        .then(response => response.json())
        .then(function (response) {
            var weatherHTML = renderWeather(response);
            weatherContainer.innerHTML = weatherHTML;
            weatherData = response;
        });
});

const weatherCard = document.getElementById("weather_card")

function renderWeather(weatherArray) {
    const temp = Math.round(weatherArray.main.temp);
    const feels_like = Math.round(weatherArray.main.feels_like);
    const condition = weatherArray.weather[0].main;
        return `
        <div class="card-title">Weather In: Houston
        <div class="condition">Condition: ${condition}</div>
        <div class="temp">Temperature: ${temp} F</div>
        <div class="feels_like">Feels Like: ${feels_like} F</div>
        </div>
    `;
}





