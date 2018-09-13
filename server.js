// Codigo del servidor
const express = require('express')
const app = express()
// Iniciando express

// Ahora voy a requerir modulos para middlewares y conectarme a mongoDB, en el cuader están las útilidades de estos
const bodyParser = require('body-parser') // middleware
const morgan = require('morgan') // middleware
const mongoose = require('mongoose')
// mongoose utiliza el modulo o conector oficial de mongoDB, pero mongoose nos provee otras funcionalidades más como definir modelos

const config = require('./config') // requiriendo la configuración que esta en la misma carpeta
// settings
const port = process.env.PORT || 3000;
// Configurando el puerto, en caso que tengamos un puerto configurado en nuestro OS de nuestro servidor, que lo use en caso contrario que use uno en el puerto 3000

mongoose.connect(config.database, {
    useMongoClient : true
}) 
mongoose.Promise = global.Promise // Dejar la app escalable con las promesas
// Al ser config un objeto llamamos la propiedad database
// Para conectarme a una bd mongoDB, no hay necesidad de crearla antes ya que si le agregamos datos ella la crea por nosotros, pero puedo recibir toda la config de otro archivo (config.js) 

// middlewares
app.use(bodyParser.urlencoded({extended : false})) // Cuando envia a travéz de un formulario y extended false, por que no enviare imagenes ni nada complicado
app.use(bodyParser.json()) // Para recibir JSON
// El navegador cuando me envie información al servidor a travéz del método POST, utilizamos este modulo y lo que hace es cambiar o convertir el cuerpo de las peticiones POST 

app.use(morgan('dev')); // dev de desarrollo por lo tanto me muestra una URL corta cada vez que llega algo al servidor
// Ahora si también quiero verlos en la consola cuando lleguen estas peticiones POST

// routes


app.listen(3000, () => {
    console.log('server on port 3000')
})