//Variáveis
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
//Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas
// Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.
// 1.Crie uma constante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
// 2.Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
// 3.Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
const base = 5;
let height = 8;
const area = base * height;
const perimeter = (2 * base) + (2 * height);
console.log(area);
console.log(perimeter);
//Condições If e Else
// 1.Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
// 2.Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
// Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
// Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
// Se a nota for menor que 60, imprima "Você foi reprovada(o)"
// 3.Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
// 4.Altere o valor da nota para verificar se as condições que você implementou funcionam;
const