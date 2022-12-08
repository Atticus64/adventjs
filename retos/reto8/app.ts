function checkPartTs(part: string): boolean {
  let condition = false;

  const characters: Array<string> = Array.from(part);
  characters.forEach((_c, idx) => {
    const arr: Array<string> = Array.from(part);
    // cambiando los caracteres
    arr.splice(idx, 1);
    // creando las palabras
    const normal: string = arr.join("");
    const reversed: string = arr.reverse().join("");
    if (normal === reversed) {
      condition = true;
    }
  });

  return condition;
}

checkPartTs("miidim"); // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

checkPartTs("midu"); // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
