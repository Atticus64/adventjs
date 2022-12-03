function distributeGiftsTs(packOfGifts: string[], reindeers: string[]) {
  let sumaGifts = 0;
  let sumaReindeers = 0;
  packOfGifts.forEach((gift: string) => {
    sumaGifts += Number(gift.length); // es el peso de los regalos
  });

  reindeers.forEach((r: string) => {
    sumaReindeers += Number(r.length * 2); // es el peso de los renos
  });

  return Math.floor(sumaReindeers / sumaGifts);
}

const packOfGifts: Array<string> = ["book", "doll", "ball"];
const reindeers: Array<string> = ["dasher", "dancer"];
// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

const res = distributeGiftsTs(packOfGifts, reindeers);
console.log(res);
