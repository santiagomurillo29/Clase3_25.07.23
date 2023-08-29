function sonIguales(a,b){

    valor = false;

    if(a.length === b.length){
        for(let i = 0; i < a.length; i++){
            if(a[i] === b[i]){
                valor = true;
            }
            else{
                valor = false;
                break
            }            
            
        }
    }

    return valor
    
}

console.log(sonIguales([2,4], [2,3]))