// Iremos utilizar esse array 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// exercicio: some todos os valores contidos no array e imprima o resultado;
let soma = 0
for (let index = 0; index < numbers.length; index+=1) {
    soma += numbers[index];
}
console.log(soma);