import {obtenerCanciones} from './serviciogenerarcanciones.js'

import {pintarCanciones} from './pintarcanciones.js'

//llmar la funcion generar token

let canciones=await obtenerCanciones()

//llamar la funcion pintar canciones
pintarCanciones(canciones.tracks)
