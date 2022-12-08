function checkPart(part) {
    let condition = false;
    const characters = Array.from(part)
    characters.forEach( (_c, idx) => {
        const arr = Array.from(part) 
        // cambiando los caracteres
        arr.splice(idx, 1);
        // creando las palabras 
        const normal = arr.join('')
        const reversed = arr.reverse().join('')
        if ( normal === reversed ){
        condition = true
        }        
    }) 

    
    return condition
}  


  
checkPart("miidim") // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

checkPart("midu") // false
// "midu" no puede ser un palíndromo después de eliminar un carácter