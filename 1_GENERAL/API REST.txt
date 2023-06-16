API REST o RESTFULL
==================================================================================================

API         - Abstraccion de funciones y procedimientos, conjunto de funciones, metodos para usarlos a nivel de codigo
REST        - Logica de implementacion, restricciones y reglas con la cual se puede contruir una API - tipo arquitectura 
RESTUFULL   - API ya implementada contruida bajo la logica REST 

API REST    - Similar a API, es un conjunto de funciones, metodos pero basado en el protocolo HTTP, nos da un conjunto de 
              URL's que nos resuelven distintas tareas incluso con la base de datos del Back-End, devolviendo lo que requerimos generalmente ten JSON

Funciona bajo la arquitectura cliente-servior con HTTP como protocolo de comunicacion. Es una aplicacion web del lado del Back-End (servicio web).
Devuelve los datos del cliente en XML o JSON (JSON - mas usada actualmente)

Los verbos o metodos (HTTP) mas usados bajo esta logica de implementacion son:
    - GET       Consulta
    - POST      Creación o registro
    - PUT       Actualizacion
    - DELETE    Borrado


    idpotentes

Cliente - puede ser cualquier dispositivo q entienda el protocolo HTTP (movil, ordenador, refrijerador, automovil, etc) ellos al usar la APIREST se le
devolveran los datos (JSON p. ej) para hacer uso de ellos en su aplicacion (Front-End)

--------------------------------------------------------------------------------------------------------------
Ejercicio: 

    1) Usando Postman
    https://www.youtube.com/watch?v=SbhzQqP1p70&ab_channel=C%C3%B3digoMorsa
    
    2) Usando node.js
    https://www.youtube.com/watch?v=bK3AJfs7qNY&ab_channel=FaztCode
    https://www.youtube.com/watch?v=bK3AJfs7qNY

Firebase - Permite crear proyectos online donde permite el uso de REST API
https://firebase.google.com/?hl=es

Postman - Software de SO que permite hacer (simular) peticiones HTTP usando el proyecto antes creado en Firebase (BD con JSON)
https://www.postman.com/

--------------------------------------------------------------------------------------------------------------
Ejemplos de apis sencillas y practicas:

    https://pokeapi.co/                         Datos e imagenes de pokemonos
    https://dog.ceo/dog-api/                    Datos e imagenes de perros
    https://developer.marvel.com/               Personajes, comics y peliculas de marvel
    https://nomics.com/                         Criptomonedas
    https://openweathermap.org/api              Clima
    https://jsonplaceholder.typicode.com/       Publicaciones, comentarios fotos y usuarios
    https://api.nasa.gov/                       Imagenes de la nasa, tiempo de marte etc
    https://unsplash.com/developers             Fotos de alta calidad, ademas posee librerias para js PHP y Ruby
    developers.giphy.com/docs/api

NOTA: con estas API's solo se podra usar el verbo GET de HTTP, si se necesita utilizar algun otro exite una libreria
      que permite copiar la API de manera local donde ya se podra hacer uso de POST, DELETE, entre otras

      https://www.npmjs.com/package/json-server

      comando para node:
      npm i json-server

fuente:


--------------------------------------------------------------------------------------------------------------
Despliegue de proyectos

Se pueden unsar servicios de internet para desplegar proyectos de Front-End a la nube desde linea de comando con URL funcional tales como:

- Vercel
- Netlify


- Heroku