///1. para que servicio voy
const URI="https://accounts.spotify.com/api/token"

///2. almaceno los datos que voy a enviar
let dato1='client_id=8612eaa63dd245ba9fb669538cf9de6c'
let dato2='client_secret=fe2b8203a57146eab875508a9ea6b6b9'
let dato3='grant_type=client_credentials'

///3. configuro la peticion
const PETICION={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}


//4. cosumir el servicio
export async function generarToken(){

    let respuesta= await fetch(URI,PETICION)
    return (respuesta.json())

}