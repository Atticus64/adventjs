function wrappingTs(gifts: Array<string>) {
  return [...gifts.map(r => {
    const papel: string = ''.padStart(r.length + 2, '*')
    return `${papel}\n*${r}*\n${papel}`

  })]
}


const solucionTs = wrappingTs(['Playstation 5', 'Bicicleta', 'Juego de mesa'])
console.log(solucionTs)