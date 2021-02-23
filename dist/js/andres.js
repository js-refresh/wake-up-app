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
        <div style="background-size: 100% ; background-position: center; background-image: url('./assets/img/backgrounds/weatherimg.jpeg')" id="weather" class="card card-portfolio weather h-100 w-100">
        <br> 
        <div class= "weathertxt bg-none card-title text-center pt-3">Weather In: Houston
        <br>
        <div class="bg-none condition"><br>Condition: ${condition}</div>
        <br>
        <div class="bg-none temp">Temperature: ${temp} F</div>
        <br>
        <div class="bg-none feels_like">Feels Like: ${feels_like} F</div>
        </div>
    `;
}





