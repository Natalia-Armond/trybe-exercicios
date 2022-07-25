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
// Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.
// 1.Crie uma constante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
// 2.Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
// 3.Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
const base = 5;
let height = 8;
const area = base*height;
const perimeter = (2*base) + (2*height);
console.log(area);
console.log(perimeter);