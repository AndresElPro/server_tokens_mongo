// Aquí puedo tener las variables de entorno, nombre de la bd, si quiero tener un bd para desarrollo y otra para producción

// Para mongo puede tener información de que BD estoy utilizando, cual es el puerto por defecto de esta, en que entorno estoy y más
module.exports = {
    'secret' : 'andresjwt', // clave secreta para JWT
    'database' : 'mongodb://localhost/jwt-basedatos'  // nombre de la bd, donde se va a conectar
}