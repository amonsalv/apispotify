import {generarToken} from './serviciogeneraltoken.js'

//llmar la funcion generar token

let tokenRespuesta=await generarToken()
let token=`${tokenRespuesta.token_type} ${tokenRespuesta.access_token}`
console.log(token)

//URI del servicio
const URI="https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?market=US"


//configuro la peticion

const PETICION={
    method: "GET",
    headers:{Authorization:token}
}

//Consumo el servicio
export async function obtenerCanciones(){
    let respuesta=await fetch(URI,PETICION)
    return respuesta.json()
}