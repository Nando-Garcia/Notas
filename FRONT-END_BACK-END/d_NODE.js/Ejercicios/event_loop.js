/* 
console.log("uno")
setTimeout( () => console.log("dos"),2000)
console.log("tres") 
*/

const http = require ('http')
const servidor = http.createServer((req, res) => {
    if (req.url == '/'){
        res.write('Bienvenido!!')
        return res.end()
    }

    if (req.url == '/about'){

        for (let i = 0; i < 100000; i++){
            console.log (Math.random() * i)
        } 
        return res.end("Acerca de nosotros")
    }

    res.end("Pagina no encontrada!")
})

servidor.listen(5001)
console.log("servidor funcionando en el puerto 5001")