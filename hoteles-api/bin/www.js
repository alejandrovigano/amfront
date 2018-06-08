const mongoose = require('mongoose');
const app = require('../app');

const port = normalizePort('3000');
const server = app.listen(port);
server.on('error', onError);
server.on('listening', onListening);

//conectarme a mongo
console.log(process.env.MONGO_CONN);
mongoose.connect(process.env.MONGO_CONN);

//abro conexion
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

    //inicializar la db, esto es solo para los fines del examen de almundo.
    let Hotel = require('./../app/hoteles/hoteles-model');
    let hotelesData = require('./../data.json');

    Hotel.remove({},() => {
        hotelesData.map(x => new Hotel(x)).map(x => x.save());
    });
});

function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            process.exit(1);
            break;
        case 'EADDRINUSE':
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    let addr = server.address();
    let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
}
