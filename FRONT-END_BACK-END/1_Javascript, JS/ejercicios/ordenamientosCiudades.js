/* 
Ejercicio:
Escribe una funcion que logee las 5 ciudades que 
se repitan mas en el arreglo de abajo
- Ordena de mayor a menor las ciudades que mas se repitan
 */
const listaCiudades = [
    "CDMX",
    "Aguascalientes",
    "Michoacán",
    "Guerrero",
    "Sinaloa",
    "Oaxaca",
    "CDMX",
    "Sinaloa",
    "CDMX",
    "Guerrero",
    "CDMX",
    "Sinaloa",
    "CDMX"
]

//crea un objeto con lo nombres de la ciudad y los valores (veces repetidas)
function logMostrarMasOcurrencia (numeroCiudades) {
    const ciudades = {};        //se crea objeto vacio
    listaCiudades.forEach(ciudad => {
        ciudades[ciudad] = !ciudades[ciudad] ? 1 : ciudades[ciudad] += 1
    })
    //imprime solo el objeto generado 'ciudades' en el bucle sin filtros ni ordenamiento ni nada
    console.log(ciudades);      

    return Object.keys(ciudades)    //convierte objeto a array mostrando solo el nombre de las ciudades
    .map(ciudad => ({               //convierte a un array de objetos con dos variables
        nombre: ciudad, 
        veces: ciudades[ciudad]
    }))
    .sort((a,b) => b.veces - a.veces)   //ordenado de mayor a menor veces repetidos
    .slice(0,numeroCiudades)        //devuelve una porcion del array desde la posicion 0 
    .map(ciudad => ciudad.nombre)       //Para cada ciudad devuelva solo el 'nombre'
}

logMostrarMasOcurrencia(5)

/* 
NOTA: un bojeto no se puede ordenar, pero un arreglo si
fuente:
https://www.youtube.com/watch?v=G6uvuIJ6Af0&ab_channel=CarlosAzaustre-AprendeJavaScript

 */