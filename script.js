
function getwheather() {
  let city = document.getElementById("cityInput").value;
  let tifeApiKey = "748757f44decbdd3da72168d9b197a08";
  let apikURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${tifeApiKey}`;

  fetch(apikURL)
      .then((response) => {
          if (!response.ok) {
              throw new Error('network is not avalible');
          }
          return response.json();
      })
      .then((data) => {
          const weatherDataElement = document.getElementById("weatherInfo");
          const temperature = data.main.temp;
          const description = data.weather[0].description;
          const cityName = data.name;
          const cloudiness = data.clouds.all;
          const windSpeed = data.wind.speed;
          const errormessage = data.message;

          weatherDataElement.innerHTML = `
              <h2>Weather in ${cityName}</h2>
              <p>Temperature: ${temperature}°C</p>
              <p>Description: ${description}</p>
              <p>cloudiness: ${cloudiness}</p>
              <p>windSpeed: ${windSpeed}</p>
              
          `;
      })
      .catch((error) => {
        const weatherDataElement = document.getElementById("weatherInfo");
      });
};
