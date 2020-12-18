const axios = require('axios');

const getLugarLatLng = async ( direccion ) => {
    
    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://api.opencagedata.com/geocode/v1/json?q="${encodeUrl}"&key=edc0e354dce94355b1d64a96cbcec7db`
      });
    
      const resp = await instance.get();
      
      if(resp.data.results.lenght === 0){
          throw new Error (`No hay resultados para ${direccion}`);
      }

      const data = resp.data.results[0];

      const dir = data.formatted;
      const lat = data.geometry.lat;
      const lng = data.geometry.lng;

      
    return {
        dir,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}