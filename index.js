
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}
    
    function displayWeatherCondition(response) {
        document.querySelector("#city").innerHTML = response.data.name;
        document.querySelector("#temperature").innerHTML = Math.round(
            response.data.main.temp
        );

        document.querySelector("#humidity").innerHTML = response.data.main.humidity;
        document.querySelector("#wind").innerHTML = Math.round(
            response.data.wind.speed
        );
        document.querySelector("#description").innerHTML =
            response.data.weather[0].main;
            let dateElement = document.querySelector("#date");
        let currentTime = new Date();
        dateElement.innerHTML = formatDate(currentTime);

        
        let descriptionElement = document.querySelector("#description");
        descriptionElement.innerHTML = response.data.weather[0].description;

        let iconElement = document.querySelector("#icon");
        iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
            ;
        iconElement.setAttribute("alt", response.data.weather[0].description);
    }
    

    function searchCity(city) {
        let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayWeatherCondition);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let city = document.querySelector("#city-input").value;
        searchCity(city.value);

    }
    let searchForm = document.querySelector("#search-form");
    searchForm.addEventListener("submit", handleSubmit);


     
        searchCity("New York");

    

    function convertToFahrenheit(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector("#temperature");
       celsiusLink.classList.remove("active");
       fahrenheitLink.classList.add("active");
        let fahrenheitTemperature = (celsiusTemperature * 9)/5 +32;
        temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
    }

    
   

    function convertToCelsius(event) {
        event.preventDefault();
        celsiusLink.classList.add("active");
        fahrenheitLink.classList.remove("active");
        let temperatureElement = document.querySelector("#temperature");
        temperatureElement.innerHTML = Math.round(celsiusTemperature);

    }

    let fahrenheitLink = document.querySelector('#fahrenheit-link');
    fahrenheitLink.addEventListener('click', convertToFahrenheitTemperature);


     let celsiusLink = document.querySelector('#celsius-link');
    celsiusLink.addEventListener('click', convertToCelsiusTemperature);

    let celsiusTemperature = null;