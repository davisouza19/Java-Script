//  METODOS PARA STRING

let string = 'Olá, Mundo!'

//slice(start, end)
console.log(string.slice(0, 5))
console.log(string.slice(-6)) //de tras para frente

//substring(start, end)
console.log(string.substring(0, 5))
//Não aceita índices negativos: transforma valores negativos em 0.
//Se o índice inicial for maior que o final, ele inverte os valores automaticamente.
console.log(string.substring(7, 3)) // mesmo que: sbustring(3, 7)