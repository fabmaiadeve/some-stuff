// 4 Formas principais de Output

document.getElementById("titulo").innerHTML = "Olá, td certo!";

document.write("Tenho algo mais aqui.");

document.write("<br />");

/* Alterando dados no browser atraves de uma janela do navegador*/
window.alert("Texto de Alerta!"); // pode ser ==> alert("Texto de Alerta!");

console.log("Isso vai aparecer no log!");

var namePrompt = prompt('Qual é seu nome?');

document.write(namePrompt);