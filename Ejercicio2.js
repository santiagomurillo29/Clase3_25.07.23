function recortar(cantidadLetras, palabras){

    for(let i = 0; i < palabras.length; i++){

        let separar = palabras[i].slice(0, cantidadLetras)
        console.log(separar)
    }

}

recortar(2, ["santiago", "vanesa", "rojo"])