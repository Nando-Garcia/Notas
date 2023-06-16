const os = require ('os')

console.log(os.userInfo())          // Muestra informacion del sistema
console.log(os.uptime())            // tiempo de PC encendido (ern segundos)
console.log(os.platform())          // SO usado 
console.log(os.totalmem())          // total de memoria RAM 
console.log(os.freemem())           // RAM libre 

// Muestra informacion en tabla, se especifica que mostrar con un objeto js
console.table ({
    sistema: os.platform(),
    version: os.release(),
    memoria: os.totalmem()
})