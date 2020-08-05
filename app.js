/**
 * Existen muchos paquetes con diferentes funciones en node
 * para revisar que paquetes tiene la version que tengo instalada
 * tengo que ir al sitio de node js, y revisar la documentacion, elegir la version y ver los paquetes que este contiene
 */


/**
 * Para importar o invocar un paquete incluido en node
 * tengo que utilizar la palabra reservada require
 * para este caso voy usar fileSystem, que es un paquete para guardar archivos en txt
 */

/** ********* Requires ************ **
 *Existen 3 tipos de Requires
 * 1- Es el require que invoca paquetes o librerias que ya existen en Node como fs
 * 2- Es el require que importa librerias externas que se instalan como por ejemplo express
 * 3- Es el require que importa archivos que yo creo en el proyecto, utilizan el ./ + la ruta del archivo  
 */

//let fs = require('fs');
/*para no instanciar una variable como objeto
/puedo destructurar todas las funciones 
como por ejemplo multiplicar, destruturo la funcion crear archivo, que ya esta en el exports del module*/
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

/**
 * Yargs
 */
const argv = require('./config/yargs').argv;
/**
 * colors
 */
var colors = require('colors');
/**
 * Tambien puedo capturar los comandos como listar, comer, craar borrar, o cualquiera que yo cree
 * apartir de ese comando puedo ejecutar una tarea 
 */

let comando = argv._[0];
let print = '';
switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo creado:  ${archivo.nameFile}`.red))
            .catch(err => console.log(err));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        print = 'Comando no encontrado';
        break;
}

console.log(print);

//let base = 80;
/* existe una variable global que contiene muchos datos dentro de la ejecucion de nodejs
 *  la variable se llama process, para recorger argumentos o parametros se utiliza argv
 * voy pasar la base como argumento al momento de la ejecucion
 */
/*let base = process.argv[2].split("=")[1];

crearArchivo(base)
    .then(archivo => console.log(`El archivo creado:  ${archivo.nameFile}`))
    .catch(err => console.log(err));*/

/*const multiplicar = require('./multiplicar/multiplicar');
let base = 50;

multiplicar.crearArchivo(base)
    .then(archivo => console.log(`El archivo creado:  ${archivo.nameFile}`))
    .catch(err => console.log(err));*/