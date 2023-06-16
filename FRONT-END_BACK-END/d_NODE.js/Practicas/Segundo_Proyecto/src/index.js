// const express = require('express')

import express from 'express' 

const app = express()

// .send -> funcion especial de express
app.get('/', (req, res) => {
    res.send('<h1>Bienvenido</h1>')                
})

app.get('/acercade', (req, res) => {
    res.send('<h1>Sobre nosotros<br>.<br>.<br>.</h1>')
}) 

//localhost
//app.listen(3000)
//console.log("Servidor funcionando en el puerto", 3000)

// variables de entorno de heroku al subirlo a la nube
app.listen(process.env.PORT || 3000)     
console.log("Servidor funcionando en el puerto", process.env.PORT || 3000)   



