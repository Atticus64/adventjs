function wrapping(gifts) {
  return [...gifts.map((r) => {
    const papel = "".padStart(r.length + 2, "*");
    return `${papel}\n*${r}*\n${papel}`;
  })];
}

const solucion = wrapping(["Playstation 5", "Bicicleta", "Juego de mesa"]);
console.log("Reto numero 1 en javascript");
console.log(solucion);
