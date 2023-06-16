const path = require ('path')

console.log(path.sep)                                                       // sep, usa el separador de ruta espcifico para cada SO
const direccion = path.join('/public', 'dist', '/styles', 'main.css')       /* permite unir directorios  aunq no se especifique el separador, join 
                                                                            va a detectar automaticamente el separador */
console.log(path.basename(direccion))                                       // devuelve el archivo base de toda la URL (direccion)
console.log(path.dirname(direccion))                                        // devuelve la ruta de algun directorio sin el archivo
console.log(path.parse (direccion))                                         // devuelve la misma ruta pero en forma de objeto

console.log(path.resolve ('dist'))                                          // resuelve la ruta dandole como parametro el nombre de un directorio