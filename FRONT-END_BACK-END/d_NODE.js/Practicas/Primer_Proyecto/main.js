
// guarda todo el 'export' (propiedad) de mi propio modulo
const a = require('./modulo/miPropioModulo')  //no es necesario poner la extension .js
console.log(a)

// guarda solo uno o mas elementos del export, ctrl + espacio para ver lo que contiene 'exports'
/* 
const {miDireccionWeb, miNumero} = require('./modulo/miPropioModulo')
console.log (miDireccionWeb, miNumero)
 */

 const operaciones_matematicas = require ('./operaciones_matematicas/index')
 //console.log(operaciones_matematicas)
 console.log(operaciones_matematicas.division(1, 2))  




