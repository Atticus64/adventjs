function distributeGifts(packOfGifts, reindeers) {
  let sumaGifts = 0;
  let sumaReindeers = 0;
  packOfGifts.forEach((gift) => {
    sumaGifts += gift.length; // es el peso de los regalos
  });

  reindeers.forEach((r) => {
    sumaReindeers += r.length * 2; // es el peso de los renos
  });

  return parseInt(sumaReindeers / sumaGifts);
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];
// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

const res = distributeGifts(packOfGifts, reindeers);
console.log("Reto numero 3 javascript");
console.log({ boxes: res });
