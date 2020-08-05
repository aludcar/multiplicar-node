/** requires **/

let fs = require('fs');
const path = './tablas/';

let crearArchivo = (base, limite = 10) => {
    let data = '';
    let nameFile = `tabla-${base}.txt`;


    /*for (let index = 1; index <= 10; index++) {
        data += `${base} * ${index} = ${base * index} \n`;
    }

    fs.writeFile(`${path}${nameFile}`, data, (err) => {
        if (err) throw err;
        return {
            nameFile: nameFile,
            path: path + nameFile
        }
    });*/

    return new Promise((resolve, reject) => {
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index} \n`;
        }

        fs.writeFile(`${path}${nameFile}`, data, (err) => {
            if (err) reject(err);
            resolve({
                nameFile: nameFile,
                path: path + nameFile
            })
        });
    });
}

let listarTabla = (base, limite) => {
    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base * index}`);
    }
}

/**
 * De esta forma yo puedo exportar mis archivos
 * De esta forma puedo agregar funciones desde otro archivos y acomplarlos al module
 * con es global y se puede utilizar en cualquier lugar
 */
module.exports = {
    crearArchivo,
    listarTabla
}