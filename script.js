/*var mensagem = "Olá! Mundo";

alert(mensagem);*/

var a = 2;
var b = 3;
var c = "Ola mundo";
/*var soma = a+b;
var sub = a-b;
var mult = a*b;
var div = a/b;

alert(soma);
alert(sub);
alert(mult);
alert(div);*/

/*if (b%2 == 1){
	alert("Numero impar");
}*/

/*if (a%2 == 1){
	alert("Numero impar");
}
else if (c%2 == 0){
	alert("Numero par");
}
else {
	alert("Numero invalido");
}*/

// while (enquanto)

/*var i = 0;

while (i < 3){
	alert(i);

	i = i+1;
}*/

/* for (para)

for (var j = 0; j < 3; j++){
	alert(j);
}*/
/*
// Um item do array
var lista = ["Laranja", "maça", "Banana", 1234];

alert(lista[0]);

// todo array
for (i in lista){
// posição no array
	alert(i);
// cada elemento da lista
	alert(lista[i]);
}*/

//Console.log no inspencionar

//console.log("ola mundo");

//Função
/*
function soma(a, b){
	console.log(a+b);

}
 
 //soma(2, 2);

 function substração(a, b){
 	return a-b;
 }

  var s = substração(5, 3);
  console.log(s);

  function multiplicacao(a,  b){
  	return a*b;
  }
  console.log(multiplicacao(5, 5));
  */
/*
  function mensagem(nome){
  	alert("Ei não clique em mim " +nome);
  }
*/
/*
function mudaCor(cor){
	var elemento = document.getElementById("mensagem");
	//pode alterar varias propriedades
	elemento.style.color = cor;
}*/

function valida(){
	var nome = document.getElementById('nome');

	if (nome.value == "") {
		alert("Campo não pode ficar em branco");
	}
	else {
		alert("Nenhum problema foi encontrado. ");
	}
}