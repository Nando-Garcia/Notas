function suma (a, b) {
    return a + b
}

function resta (a, b) {
    return a - b
}

function producto (a, b) {
    return a * b
}
/* 
function division (a, b) {
    return a / b
}
 */

            // Nueva forma de exportar individualmente
            export function division (a, b) {
                return a / b
            }

// agrega al module un objeto con las 4 funciones con operaciones matematicas
/* 
module.exports = {
    suma,
    resta,
    producto,
    division
}
 */

            // Nueva forma de exportar
            
            export default {
                suma,
                resta,
                producto,
                division
            };


// ejecutar con node index.js