function obtenerResultado(jugadorA, jugadorB, puntajesA, puntajesB){

    acumA = 0
    acumB = 0
    acumE = 0

    if(puntajesA.length === puntajesB.length){

        for(let i = 0; i < puntajesA.length; i++){

            if(puntajesA[i] > puntajesB[i]){
                acumA = acumA + 1
            }
            else if(puntajesA[i] < puntajesB[i]){
                acumB = acumB + 1
            }
            else{
                acumE = acumE + 1
            }
            
        }

        if(acumA > acumB){
            console.log("Ganó " + jugadorA)
        }
        else if(acumB > acumA){
            console.log("Ganó " + jugadorB)
        }
        else{
            console.log(jugadorA + " y " + jugadorB + " empataron")
        }
    }
}

console.log(obtenerResultado('Sara', 'Santiago', [5, 5] , [5, 5]))