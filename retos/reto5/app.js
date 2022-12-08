function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const combinations = giftsCities.reduce((a, v) => {
    return a.concat(a.map((d) => [v].concat(d)));
  }, [[]]);
  const filtered = combinations.filter((arr) => arr.length <= maxCities);

  const sumas = filtered.map((arr) =>
    arr.reduce((acc, curr) => {
      return acc + curr;
    }, 0)
  );

  const resp = sumas.filter((sum) => sum <= maxGifts);
  return Math.max(...resp);
}

const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

getMaxGifts(giftsCities, maxGifts, maxCities); // 20
