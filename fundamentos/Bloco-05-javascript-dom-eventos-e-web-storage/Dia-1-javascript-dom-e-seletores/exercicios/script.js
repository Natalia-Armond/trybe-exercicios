 /*
    Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
    */
   //1.Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
   function trocar(text) {

    document.getElementsByTagName('p')[1].innerHTML = "Daqui dois anos ja estarei trabalhando como desenvolvedora e alcançando voos mais altos"
    'daqui dois anos ja estarei trabalhando como desenvolvedora e alcançando voos mais altos.'
  }
  trocar()

 //2.Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
  function mudarAmarelo(cor) {
    let trocarColor = document.getElementsByClassName('main-content')[0];
    trocarColor.style.background = "rgb(76,164,109)";
  }
  mudarAmarelo()

 //3.Crie e execute uma função que mude a cor do quadrado vermelho para branco.
  function mudarVermelho(cor) {
    let trocarColor = document.getElementsByClassName('center-content')[0];
    trocarColor.style.background = "white" ;
  }
  mudarVermelho()

 //4.Crie e execute uma função que corrija o texto da tag <h1>.
  function corrija(titulo) {
  const title = document.getElementsByClassName('title') [0]
  title.innerText = 'Execício 5.1 - JavaScript';
  }
  corrija()

 //5.Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
 function maiusculo() {
    let modificar = document.getElementsByTagName('p')
    for (let index = 0; index < modificar.length; index +=1) {
        console.log(modificar[index]);
        modificar[index].innerText = modificar[index].
        innerText.toUpperCase();
        
    }
 }

 //6.Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
 function maiusculo() {
    let modificar = document.getElementsByTagName('p')
    for (let index = 0; index < modificar.length; index +=1) {
        console.log(modificar[index]);   
    }
 }

