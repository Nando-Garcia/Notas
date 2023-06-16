const http = require('http')

// Se inicia el servidor al ejecutar el archivo js y para detenerlo se debe calcenlar con doble CTRL + C
const servidor = http.createServer((request, response) => {

    // Al refrescar la pagina en el navegador se ejecuta este console.log
    // Esto es lo que el usuario esta visitando, se puede hacer un mensaje de bienvenida, etc
    console.log(request.url)

    if (request.url == '/') {
        response.write('Bienvenido!')
        return response.end()
    }

    // si el usuario entra a www.ejemplo.com/about se mostrara lo siguiente
    if (request.url == '/about') {
        response.write('Acerca de nosotros, nuestra empresa.....')
        return response.end()   // el 'return' termina la funcion, es decir no ejecuta lo demas 
    }

    // tambien se pueden escribir etiquetas HTML en el texto para ser interpretado por el navegador
    response.write(`
        <h1>Pagina no encontrada</h1>
        <a href="/">Volver a la página principal</a>
    `)

    response.end()
})

servidor.listen(3000)

console.log ('Servidor escuchando en el puerto 3000')

/* 
Probar desde navegador
http://localhost:3000/
http://localhost:3000/about
 */