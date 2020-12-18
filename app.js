const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
    .options({
        direccion:{
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true
        }
    })
    .argv;



// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch( err => console.log(err));

// clima.getClima('40.75','-74')
//     .then(console.log)
//     .catch(console.log);

const getInfo = async ( direccion ) => {

    
    try {
        let coordenadas = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return(`La temperatura en ${coordenadas.dir} es de ${temp} °C`);
    } catch (error) {
        return(`No se pudo determinar la temperatura de ${direccion}`, error);
    }
    // Salida:
    // El clima de XXXX es de XX
    // No se pudo determinar el clima de XXXX
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);