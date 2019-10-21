const axios = require("axios");

const getWeather = async (lat, lng) => {

  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9dea806fa38a5c73443539277f55cd21&units=metric`);

  return resp.data.main.temp
}

module.exports = {
  getWeather
}