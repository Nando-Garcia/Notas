//PROMISES CALLBACKS
//==================================================================================================
/* 
Los CALLBACKS son funciones que se pasan como parametros a otras funciones, es decir,
se mandan los datos al terminar de obtenerlos.
*/

const operacion_callback = (numero1, numero2, callback) => {
    const resultado = numero1 + numero2
    return setTimeout (() => {   //el 'setTimeOut' esta simulando los datos asincronos pero esto podria ser un web service etc 
        callback (resultado)
    }, 500)
}
operacion_callback (1, 3, (resultado_final) => {
    console.log(resultado_final)
});

//-----------------------------------------------------------

// utilizando PROMISES, lo que reemplaza en el codigo anterior es el callback, reemplazando queda como sigue:
const operacion_promises = (numero1, numero2) => {
    const resultado = numero1 + numero2
    return new Promise ((resolve,reject) => {   //reject se usa cunado algo falla, ver 'promises_2.js'
        setTimeout (() => {   //el 'setTimeOut' esta simulando los datos asincronos pero esto podria ser un web service etc 
            resolve(resultado)
        }, 500)
    })        
}
operacion_promises (1, 3).then(resultado_final => console.log(resultado_final))