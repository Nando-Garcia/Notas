/*
const {writeFile} = require ('fs/promises')             // writeFile funciona de manera asincrona

// Crea un archivo de texto grande, se uso una vez 
const crearArchivoGrande = async () => {
    await writeFile('./streams/archivoGrande.txt', 'It\'s not over Yet \n'.repeat(100000))
}

crearArchivoGrande ()
 */
const {createReadStream} = require ('fs')

const stream = createReadStream('./streams/archivoGrande.txt', {            // se mandan 2 parametros, 1-la ruta del archivo, 2-Un objeto con especificaciones, leer documentacion 
    encoding: "utf-8"                           // especifica la codificaicon de cada shank
    //highWaterMark:                            // determina el tamaño de los shanks 
})
//stream.on('data', function (chunk) {          // chunk, va a recibir porciones de datos  
stream.on('data', (chunk) => {                  // chunk, va a recibir porciones de datos  
    console.log(chunk)                          // al ejecutar desde aqui, imprimira varios buffer o strings que son porciones del archivo 
})

stream.on('end', () => {                        // funcion que se ejecuta al finalizar 'end' = evento 
    console.log('Archivo leido completamente')
})

stream.on('error', (error) => {                 // funcion que se ejecuta si hay un error 'error ' = evento 
    console.log(error)    
})

