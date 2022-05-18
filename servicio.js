// paso para construir un api con js puro

//1.declaro la uri (pa donde voy)
const URI="https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?market=US"

//2. declara losparametros de la peticion (que voy a hacer)

const TOKEN="Bearer BQANEF3R0Rm2mzP8kob7XQq4M80ExdIHSD3y4TTo1inmo-nltyh1ElL93umllJ-7TyEhszTpYCu_2ep6HtAanuLdGSQl7IaUmA8bmF6lg-huMxfQbKR1jQzkFlLAo1KdD7UHZqspo1vy"
const PETICION={
    method: "GET",
    headers:{Authorization:TOKEN}
}

//rutina para consumir api con metodo POST

///1. para que servicio voy
const URIPOST="https://accounts.spotify.com/api/token"

///2. almaceno los datos que voy a enviar
let dato1='client_id=8612eaa63dd245ba9fb669538cf9de6c'
let dato2='client_secret=fe2b8203a57146eab875508a9ea6b6b9'
let dato3='grant_type=client_credentials'

///3. configuro la peticion
const PETICIONPOST={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}

///4. voy al servidor a consumir el servicio
fetch(URIPOST,PETICIONPOST)

.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    let token=respuesta.token_type+' '+respuesta.access_token
    console.log(token)
})
.catch(function(respuesta){
    console.log(respuesta)
})


//3. declaro el FETCH (voy al servidor)
/*
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})

.then(function(respuesta){
    console.log(respuesta) //respuesta es un objeto
    console.log(respuesta.tracks) // arreglo 10 canciones
    pintarCanciones(respuesta.tracks) //
})

.catch(function(respuesta){
    console.log(respuesta)
})

//Funcion para recorrer un arreglo

function pintarCanciones(canciones){

    let fila=document.getElementById("fila")
    canciones.forEach(function(cancion){
        //console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //rutina para llenado
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=cancion.album.images[0].url

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        
        //PADRES E HIJOS  
        tarjeta.appendChild(foto)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })

}

*/