const paresParaZero = function (array) {
  if (!array || !Array.isArray(array) || !array.length) return -1
  return array.map(elemento => {
    if (Number.isInteger(elemento)) {
      if (elemento % 2 == 0) {
        console.log(`Substituindo ${elemento} por 0...`)
        return 0
      }
      return elemento
    }
    return -1
  })
}

console.log(paresParaZero([1, 2, 3, 4, 5, 6]))