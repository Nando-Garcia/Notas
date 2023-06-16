// Primer proyecto, Servicio web Api-Rest con express

const express = require('express')
const app = express()

app.use(express.json())

const estudiantes = [
    {id: 1, nombre: 'Fernando', edad: 32, inscrito: true},
    {id: 2, nombre: 'Ivonne', edad: 25, inscrito: false},
    {id: 3, nombre: 'Alan', edad: 30, inscrito: false}
]

app.get('/', (req, respuesta) => {
    respuesta.send('Primer api-rest con node')
});

app.get('/api/estudiantes', (req, respuesta) => {
    respuesta.send(estudiantes)
});

app.get('/api/estudiantes/:id', (req, respuesta) => {
    const alumno = estudiantes.find(c => c.id === parseInt(req.params.id))
    if (!alumno) 
        return respuesta.status(404).send('No existe el alumno')
    else 
        respuesta.send(alumno)
})

const puerto = process.env.port || 8080;
app.listen(puerto, () => console.log('Escuchando por el puerto 8080 ')) 