
// Con promesas
//fetch('https://jsonplaceholder.typicode.com/posts')
/* 
    .then(respuesta => respuesta.json())
    .then(data => console.log(data))
     */

// Con async await
/*
async function leer () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
}
leer()
 */

// nueva forma de ecmascript, no es necesaria la funcion leer, pero debe estar declarado type: "module"
// en el package.json
try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
} catch (error) {
    console.log(error)
}
