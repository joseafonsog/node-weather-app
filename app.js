const place = require("./place/place");
const weather = require("./weather/weather");

const argv = require("yargs")
.options({
  address: {
    alias: "d",
    desc: "City address to obtain weather data",
    demand: true
  }
}).argv;

// place.getPlaceLatLng(argv.address)
// .then(res => {
//   console.log(res);
// })

// weather.getWeather(9.070000, -63.509998)
// .then(res => {
//   console.log(res);
// })
// .catch(err => {
//   console.log(err);
// })

const getInfo = async address => {
  try {
    const placeRes = await place.getPlaceLatLng(address);

    if (!placeRes || !placeRes.lat || !placeRes.lng) {
      console.log(`Can't determine the weather for ${addres}`);
      return false;
    }
    const weatherRes = await weather.getWeather(placeRes.lat, placeRes.lng);
    
    if (!weatherRes) {
      console.log(`Can't determine the weather for ${addres}`);
      return false;
    }

    console.log(`The weather for ${placeRes.address} is of ${weatherRes}°`);

  } catch (err) {
    console.log(`Can't determine the weather for ${address}`);
    throw new Error(err)
  }
}

getInfo(argv.address)
.then(res => console.log("Ok!"))
.catch(err => console.log(err));