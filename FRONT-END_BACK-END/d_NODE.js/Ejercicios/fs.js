const fs = require ('fs')

//============================================================// SINCRONA
    // ..................................... LEER ARCHIVOS
    // son lo mismo
    /* console.log(fs.readFileSync('fs_ejercicio/uno.txt'))
    console.log(fs.readFileSync('./fs_ejercicio/uno.txt'))

    // se agrega un parametro mas que es la decodificacion del buffer en strings
    console.log(fs.readFileSync('./fs_ejercicio/uno.txt', 'utf-8'))
    console.log(fs.readFileSync('./fs_ejercicio/dos.txt').toString())

    // ..................................... CREAR ARCHIVOS
    const numero = 1
    const texto = numero + 'er Archivo creado con NODE\n\n'
    //se sobreescribe siempre al ejecutar
    fs.writeFileSync('./fs_ejercicio/tres.txt', texto + 'Hola Mundo 1-3!\n')  
    // se añade solamente contenido
    const texto_agregado = '\ntexto agregado con código'
    fs.writeFileSync('./fs_ejercicio/tres.txt', texto_agregado, {
        flag: 'a'       // abreviacion de append (añadir)
    })
 */
//============================================================// ASINCRONA
    /*
    Este metodo 'readFile' a diferencia del 'readFileSync' por ser asincrono aprovecha mejor los recursos 
    del computador permitiendo ejecutar mas funciones sin depender de otras, si se requiere ejecutar sincronamente se puede 
    recurrir a las promesas o ASYNC y AWAIT para evitar el 'callback hell'(ver documento js en carpeta JAVASCRIPT)
    */
    fs.readFile('./fs_ejercicio/uno.txt','utf-8', (err, data) => {
        if (err) {
            console.log(err)
        }
        console.log(data)
    })
    



