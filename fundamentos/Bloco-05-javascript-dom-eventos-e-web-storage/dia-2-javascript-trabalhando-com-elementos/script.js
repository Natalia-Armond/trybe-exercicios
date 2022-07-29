//Vamos aos exercícios:
// 1.🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
const tagH1 = document.createElement('h1');
tagH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(tagH1);
//2.🚀 Adicione a tag main com a classe main-content como filho da tag body;
const tagMain = document.createElement('main');
tagMain.className = 'main-content';
document.body.appendChild(tagMain);
//3.🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const tagSection = document.createElement('Section');
tagSection.className = 'center-content';
tagMain.appendChild(tagSection);
//4.🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let tagP = document.createElement('p');
tagP.innerText = 'Criando um paragrafo ultilizando o Dom';
tagSection.appendChild(tagP);
//5.🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const tagSection1 = document.createElement('section');
tagSection1.className = 'let-content';
tagMain.appendChild(tagSection1);
//6.🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const tagSection2 = document.createElement('section');
tagSection2.className = 'right-content';
tagMain.appendChild(tagSection2);
//7.🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const imagem = document.createElement('img');
imagem.className = 'small-image';
imagem.src = 'https://picsum.photos/200';
tagSection1.appendChild(imagem);
//8.🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const listaUl = document.createElement('ul')



tagSection2.appendChild(listaUl);
//9.🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

//Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
//1.🚀 Adicione a classe title na tag h1 criada;

//2.🚀 Adicione a classe description nas 3 tags h3 criadas;

//3.🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

//4.🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

//5.🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

//6.🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.*/
