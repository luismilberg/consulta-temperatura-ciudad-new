const axios = require('axios');

const getClima = async (lat, lng) => {
    
    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3e4747dd67551e4c0ad77510f675075a&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}