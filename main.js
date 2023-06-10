let apiKey = "5d066958a60d315387d9492393935c19";
let cityForm = document.getElementById("cityForm");
let cityInput = document.getElementById("cityInput");
let weatherDiv = document.getElementById("weather");

cityForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let city = cityInput.value.trim();
    if (city !== "") {
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + apiKey;

        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                let temp = data.main.temp;
                let pressure = data.main.pressure;
                let description = data.weather[0].description;
                let humidity = data.main.humidity;
                let speed = data.wind.speed;
                let deg = data.wind.deg;
                let icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

                let weatherInfo = "<p>Температура: " + temp + "°C</p>" +
                    "<p>Тиск: " + pressure + " гПа</p>" +
                    "<p>Опис: " + description + "</p>" +
                    "<p>Вологість: " + humidity + "%</p>" +
                    "<p>Швидкість вітру: " + speed + " м/с</p>" +
                    "<p>Напрям вітру: " + deg + "°</p>" +
                    "<img src='" + icon + "' alt='Погодний значок'>";

                weatherDiv.innerHTML = weatherInfo;
            }
        };
        xhr.send();
    }
});





