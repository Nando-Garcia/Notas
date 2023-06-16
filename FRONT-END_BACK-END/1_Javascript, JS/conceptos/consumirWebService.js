// Api rest usada para el ejercicio:
// https://dog.ceo/dog-api/

fetch('https://dog.ceo/api/breeds/image/random')
.then((respuesta) => {
    return respuesta.json();
}).then((respuesta) => {
    console.log(respuesta.message);         // 'message' es un atributo del json (api rest)
    console.log(respuesta.status);          // 'status' es un atributo del json (api rest)
})