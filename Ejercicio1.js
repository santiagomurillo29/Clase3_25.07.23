function comer(plantas) {
    let comido = []

    let conejo = plantas.indexOf('🐇')
    let prohibir = plantas.indexOf('🚫')

    if(conejo !== -1 && prohibir !== -1){
        comido = plantas.slice(0, conejo) + plantas.slice(prohibir + 1, plantas.length)
        return comido
    }
    else{
        console.log("No se pudo")
    }


}

console.log(comer('🥕🥬🥬🥕🐇🥕🚫🥕🥕'))