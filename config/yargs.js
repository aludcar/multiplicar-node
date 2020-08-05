const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('crear', 'Crea un archivo con la tabla de multiplicar de la base', opts)
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    // este function permite mostrar toda la informacion de la variable que contiene a yargs, en este caso argv
    // se usa como node (app) nombre del archivo a ejecutar --help
    .help()
    .argv;

module.exports = {
    argv
}