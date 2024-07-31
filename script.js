const apiKey = 'YOUR_API_KEY_HERE';
const fetchWeatherButton = document.getElementById('fetch-weather');
const locationInput = document.getElementById('location-input');
const weatherInfo = document.getElementById('weather-info');
const locationName = document.getElementById('location-name');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

fetchWeatherButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    } else {
        alert('Please enter a location');
    }
});

function fetchWeather(location) {
    const url = https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('Location not found');
            }
        })
        .catch(error => console.error('Error fetching the weather data:', error));
}

function displayWeather(data) {
    locationName.textContent = data.name;
    weatherDescription.textContent = data.weather[0].description;
    temperature.textContent = Temperature: ${data.main.temp} °C;
    humidity.textContent = Humidity: ${data.main.humidity}%;
    windSpeed.textContent = Wind Speed: ${data.wind.speed} m/s;

    weatherInfo.classList.remove('hidden');
}