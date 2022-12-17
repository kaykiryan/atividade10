var header = document.querySelector("header")
var elementoh1 = document.createElement("h1");
var elementoDeTexto = document.createTextNode("atividade 10");
elementoh1.appendChild(elementoDeTexto); 
 
header.appendChild(elementoh1);

var main = document.querySelector("main")
var primeiroPraragrafo = document.createElement("p");
var textoprimeiroparagrafo = document.createTextNode("primeiro paragrafo")
var segundoParagrafo = document.createElement("p");
var textosegundoparagrafo = document.createTextNode("segundo paragrafo")
var PrimeiraDiv = document.createElement("div");
var segundaDiv = document.createElement("div");
segundaDiv.appendChild(primeiroPraragrafo);
PrimeiraDiv.appendChild(segundoParagrafo);
main.appendChild(PrimeiraDiv);
main.appendChild(segundaDiv);
segundoParagrafo.appendChild( textosegundoparagrafo);
primeiroPraragrafo.appendChild(textoprimeiroparagrafo);

