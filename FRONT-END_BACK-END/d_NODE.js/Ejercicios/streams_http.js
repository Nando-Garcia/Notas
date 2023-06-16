const http = require ('http')
const {createReadStream} = require ('fs')
    
const servidor = http.createServer((req, res) => {                                      // crea el servidor 
    const archivoStream = createReadStream('./streams/archivoGrande2.txt', {            // crea la lectura del archivo a enviar y la nombra 'archivoStream'
        encoding: "utf-8"
    })

    archivoStream.on('data', (chunk) => {                                               // lo divide para enviarlo 
        archivoStream.pipe(res)                                                         // metodo pipe que envia dato a otra funcion, en este caso a 'res'
    })

    archivoStream.on('error', error => {
        console.log(error)
    })
})

servidor.listen(3000)
console.log(`Servidor escuchando en el puerto ${3000}`)

/* 
desde el navegador y el inspeccionador en la pestaña 'red' o 'network' se pueden ver la transferencia
y en el encabezado (recargar lectura con ctrl + R en caso de chrome) se ven los datalles de la transferencia
incluyendo que fue enviado en partes (chunked)

para entender mejor este modulo leer la documentacion 
https://nodejs.org/api/stream.html
 */