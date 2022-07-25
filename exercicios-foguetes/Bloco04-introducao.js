// 1.Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
// 2.Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
// 3.Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
// 4.Utilize o console.log() para imprimir as constantes e variáveis que você criou.
// 5.Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
// 6.Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro?
// no intem 6 é inviavel atribuir um outro valor na constante porque ao contrario da variavel lest
//O valor de uma constante não pode ser alterado por uma atribuição, e ela não pod ser redeclarada 
const myName = "natalia";
const birthCity = "Acaiaca";
let birthYear = 1986;
console.log(myName, birthCity, birthYear);
birthYear = 2030
console.log(birthYear);
console.log(myName, birthCity, birthYear);
