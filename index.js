'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
       console.log("Conexion a la base de datos establ")

    //    creacion del servidor

    app.listen(port, () =>{
        console.log("servidor corriendo correctament en la url : 3700")
    })

    })
    .catch((error)=>{
       console.log(error)
    })