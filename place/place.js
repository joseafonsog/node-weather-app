const axios = require("axios");

const getPlaceLatLng = async addressText => {
  const encodedUrl = encodeURI(addressText);
  
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: {"x-rapidapi-key": "4fd144326cmshcab4ee8cd9f6377p1f2bbbjsn14e4ffd5dae6"}
  })
  
  const res = await instance.get();

  if (res.data.Results.length === 0) {
    throw new Error(`There are no results for ${addressText}`);
  }
  
  const data = res.data.Results[0];

  const address = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    address,
    lat,
    lng
  }

}

module.exports = {
  getPlaceLatLng
}