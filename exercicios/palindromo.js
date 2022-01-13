const palindromo = function (string) {
  if(!string) return
  string = string.toUpperCase()
  
  if(string.split('').reverse().join('') === string) {
    console.log(`${string} é um palíndromo.`)
  } else {
    console.log(`${string} não é um palíndromo.`)
  }
}

palindromo('Arara')