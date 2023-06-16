const EventEmitter = require ('events')             // se le llama EventEmitter por respetar la documentacion 

const  emitter_personal = new EventEmitter () 

emitter_personal.on('respuesta', (data) => {         // .on similar al addEventListener, escuchando con el evento 'respuesta' . on escucha
    console.log(data)
})

emitter_personal.emit('respuesta', 'Hola Edmundo!!')       // el parametro data = 'Hola Edmundo!!' .emit emite un evento 'click en un ejemplo del front'
emitter_personal.emit('respuesta', 30)
emitter_personal.emit('respuesta', [1, 2, 3]) 
emitter_personal.emit('respuesta', {nombre: "nando", edad: 32}) 

// =======================================================================================================================
// Otro ejemplo de eventos con 2 parametros

const emitter_personal_2 = new EventEmitter () 

emitter_personal_2.on('funcion', (dato1, dato2) => { 
    console.log(dato1)
    console.log(dato2)
})

emitter_personal_2.emit('funcion', 'hola mundo!', 30)