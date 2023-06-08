async function getWeather(city) {
  const cityName = document.getElementById("cityName");
  cityName.innerHTML = city;

  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0dd575f3e4msh5bf38ba3a9bcc23p1684f6jsndde7dfa4f907',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result);

    // Update HTML elements with weather data
    const tempElement = document.getElementById("temp");
    const feelsLikeElement = document.getElementById("feels_like");
    const cloudPctElement = document.getElementById("cloud_pct");
    const minTempElement = document.getElementById("min_temp");
    const maxTempElement = document.getElementById("max_temp");
    const windSpeedElement = document.getElementById("wind_speed");
    const windDegreesElement = document.getElementById("wind_degrees");
    const sunriseElement = document.getElementById("sunrise");
    const sunsetElement = document.getElementById("sunset");

    // Apply animations to the elements
    tempElement.classList.add("animate__animated", "animate__fadeInUp");
    feelsLikeElement.classList.add("animate__animated", "animate__fadeInUp");
    cloudPctElement.classList.add("animate__animated", "animate__fadeInUp");
    minTempElement.classList.add("animate__animated", "animate__fadeInUp");
    maxTempElement.classList.add("animate__animated", "animate__fadeInUp");
    windSpeedElement.classList.add("animate__animated", "animate__fadeInUp");
    windDegreesElement.classList.add("animate__animated", "animate__fadeInUp");
    sunriseElement.classList.add("animate__animated", "animate__fadeInUp");
    sunsetElement.classList.add("animate__animated", "animate__fadeInUp");

    // Update HTML content with weather data
    tempElement.innerHTML = result.temp;
    feelsLikeElement.innerHTML = result.feels_like;
    cloudPctElement.innerHTML = result.cloud_pct;
    minTempElement.innerHTML = result.min_temp;
    maxTempElement.innerHTML = result.max_temp;
    windSpeedElement.innerHTML = result.wind_speed;
    windDegreesElement.innerHTML = result.wind_degrees;
    sunriseElement.innerHTML = result.sunrise;
    sunsetElement.innerHTML = result.sunset;
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const defaultCity = "Delhi"; // Set the default city here
  fetchData(defaultCity);
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const city = document.getElementById("city").value;

    // Clear previous animations and weather data
    const elements = document.getElementsByClassName("animate__animated");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("animate__animated", "animate__fadeInUp");
    }
    clearWeatherData();

    fetchData(city);
  });
});

async function fetchData(city) {
  try {
    await getWeather(city);
  } catch (error) {
    console.error(error);
  }
}

function clearWeatherData() {
  document.getElementById("temp").innerHTML = "";
  document.getElementById("feels_like").innerHTML = "";
  document.getElementById("cloud_pct").innerHTML = "";
  document.getElementById("min_temp").innerHTML = "";
  document.getElementById("max_temp").innerHTML = "";
  document.getElementById("wind_speed").innerHTML = "";
  document.getElementById("wind_degrees").innerHTML = "";
  document.getElementById("sunrise").innerHTML = "";
  document.getElementById("sunset").innerHTML = "";
}
