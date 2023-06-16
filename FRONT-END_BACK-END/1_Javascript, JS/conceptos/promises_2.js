// funcion que evita errores de latencia (asincronia)
// funcion con error de asincronia

const datos = [         //arreglo de objetos
    {
        id: 1,
        titulo:'spider-man',
        lanzamiento:2008
    },
    {
        id: 2,
        titulo:'bat-man',
        lanzamiento:2015
    },
    {
        id: 3,
        titulo:'wonder-woman',
        lanzamiento:200
    }
];

/* const obtenerDatos = () => {
    return datos;
} */
const obtenerDatos = () => {
    setTimeout (() => {
        return datos;
    }, 1000)
}
console.log(obtenerDatos());
/* 
si estos datos estuvieran en un json en la red o en una API que regresara un array, 
habria una latencia y por tanto un error en la ejecucion del script (asincronia), se simula esa 
latenicia con la funcion 'setTimeOut'
*/
/* 
PROMESAS, objeto especial de js que se ejecuta una vez termiado otro proceso, 
 recibe dos parametros resolve (en caso de ejecutar con exito) y reject (en caso de error de ejecucion)
 '.then' al terminar la ejecucion
 '.catch' si hubiera un error
*/
const obtenerDatos = () => {
    return new Promise ((resolve,reject ) => {
        setTimeout (() => {
            resolve(datos);
        }, 1000)
    })
}
/* obtenerDatos().then((datos) => console.log(datos));
    // o para el error
//obtenerDatos().catch(err => ...); */


// ASYNC y AWAIT
//==================================================================================================
async function datosObtenidos () {
    const datos_asincronos = await obtenerDatos ();
    console.log(datos_asincronos);
}
datosObtenidos();


//forzando el error
//-----------------------------------------------------------

const datos = [];

const obtenerDatos = () => {
    return new Promise ((resolve,reject ) => {
        if (datos.length === 0){
            reject(new Error ('No existen datos'));
        }

        setTimeout (() => {
            resolve(datos);
        }, 1000)
    })
}

// IMPORTANTE: la funcion 'await' solo puede ser usada en funciones asincronas
async function datosObtenidos () {
    try {
        const datos_asincronos = await obtenerDatos ();
        console.log(datos_asincronos);
    } catch (err) {
        console.log(err.message);
    }
}
datosObtenidos ();