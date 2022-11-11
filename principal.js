const xmlStr = '<produtos><produto>\
  <titulo>Camiseta Esportiva</titulo>\
  <descricao>Com tecnologia inovadora que, além de controlar o calor, ajuda a reduzir a transpiração.</descricao>\
  <preco>35,50</preco>\
</produto>\
<produto>\
  <titulo>Bermuda Jeans</titulo>\
  <descricao>Bordada no estilo ROCK! 100% Algodão.</descricao>\
  <preco>54,62</preco>\
</produto>\
<produto>\
  <titulo>Calça Moletom</titulo>\
  <descricao>Básica com modelagem reta, perfeita para o look confortável, com forro peludinho.</descricao>\
  <preco>79,90</preco>\
</produto>\
</produtos>';
const parser = new DOMParser();
const doc = parser.parseFromString(xmlStr, "application/xml");
// print the name of the root element or error message
const errorNode = doc.querySelector("parsererror");
if (errorNode) {
  console.log("error while parsing");
} else {
  console.log(doc.documentElement.nodeName);
}

var produtos = doc.querySelectorAll("produto");
var body = document.querySelector("body");
var section = document.createElement("section");

section.classList.add("produtos-lista")

for (i = 0; i < produtos.length; i++) {
	var produto = produtos[i];

	createProduct(produto);
}

body.appendChild(section);

function createDiv (produto) {
	var div = document.createElement("div");

	div.classList.add("produtos-lista__produto-item");
	div.setAttribute("data-item", produto.querySelector("titulo").textContent.toLowerCase().replace(" ", "-"));
	return (div);
}

function createTitle (produto) {
	var title = document.createElement("h1");

	title.textContent = produto.querySelector("titulo").textContent;
	return (title);
}

function createParagraph (produto) {
	var paragraph = document.createElement("p");

	paragraph.textContent = produto.querySelector("descricao").textContent;
	return (paragraph);
}

function createSpan (produto) {
	var span = document.createElement("span");

	span.textContent = produto.querySelector("preco").textContent;
	return (span);
}

function createProduct (produto) {
	var div = createDiv(produto);
	var title = createTitle(produto);
	var paragraph = createParagraph(produto);
	var span = createSpan(produto);

	div.appendChild(title);
	div.appendChild(paragraph);
	div.appendChild(span);
	section.appendChild(div);
}
