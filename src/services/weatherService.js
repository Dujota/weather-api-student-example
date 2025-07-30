

const API_KEY = '6bc9e708eafa4f4ea56131849240708';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;


const show = async (city) => {
  try {
    const queryString = `&q=${city}`;
    const res = await fetch(BASE_URL + queryString);
    const data = await res.json();
    console.log('Data:', data);
    return data;
  } catch (err) {
    console.log(err);
  }
};


export {
  show
}