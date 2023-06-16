// =============================================   CALL-BACK

const {readFile} = require('fs')

/* readFile('./fs_ejercicio/uno.txt', 'utf-8', (err, data) => {
    if (err)
        console.log(err)
    console.log(data)
})  */

// =============================================   PROMISES

// Transformando lo anterior (callback) a Promises ---- Definicion, no muestra bada pues no esta espeficiada la funcion resolve y reject
 new Promise (function (resolve, reject) {
    readFile('./fs_ejercicio/uno.txt', 'utf-8', (err, data) => {
        if (err)
            reject(err)
        resolve(data)
    }) 
 })      // espera una funcion como parametro, promise se ejecutara despues de terminar la funcion del parametro
         // mandando como parametro err o data al terminar de ejecutar la funcion que se mando como parametro a la promesa

const getText = (ruta) => {
//function getText (ruta) {
    return new Promise (function (resolve, reject) {            // se debe colocar el return cuando es llamada esa promesa
        readFile(ruta, 'utf-8', (err, data) => {
            if (err)
                reject(err)
            resolve(data)
        }) 
     })
}
/*
getText('./fs_ejercicio/dos.txt')
    .then((resultado) => console.log(resultado))    
        .then(() => getText('./fs_ejercicio/tres.txt'))         // misma funcion llamada por segunda vez dentro de la primera llamada 
        .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error)) */

// =============================================   ASYNC AWAIT

async function leer() {
    try {                                                                   // con el try catch se cacha el error que pueda surgir 
        const resultado = await getText('./fs_ejercicio/uno.txt')           // al eterminar no es necesario usar el 'then' y 'catch' 
        console.log(resultado)
        throw new Error ('esto es un error que no se esperaba')             // con la palabra reservada throw todo el codigo posterior encapsulado no se ejecutara 
        const resultado2 = await getText('./fs_ejercicio/tres.txt')         // al eterminar no es necesario usar el 'then' y 'catch' 
        console.log(resultado2)
    } catch (error) {
        console.log (error)
    }    
}
leer ()

// ----->  Ejecutar desde cmd: node promises.js 