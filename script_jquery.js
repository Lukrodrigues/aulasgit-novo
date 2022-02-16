/*
$(function(){
	$('button').click(function(){
		$('h1').hide();
	});
});*/

/*
$(function(){
	$('button').click(function(){
		$('h1').css("color", "red");
	});
});*/
/*
$(function(){
	$('#azul').click(function(){
		$('p').css("color", "blue");
	});

	$('#vermelho').click(function(){
		$('p').css("color", "red");
	});
});*/
//Efeitos nas letras 
/*
$(function(){
	$('#azul').click(function(){
		$('p').css("color", "blue");
		$('p').fadeOut();
		$('p').delay(1000);
		$('p').fadeIn();
	});

	$('#vermelho').click(function(){
		$('p').css("color", "red");
	//	$('p').fadeOut('slow');
	//	$('p').fadeIn('slow');
		$('#mensagem').text("Cor alterada com sucesso.");
		$('#mensagem').css('color', 'red');
		$('#mensagem').css('border','1px solid red');
		$('#mensagem').delay(3000);
		$('#mensagem').fadeOut('fast');
	});
});*/

// Encadeamento de bloco diferente do codigo acima
/*
$(function(){
	$('#azul').click(function(){
		$('p')
		.css("color", "blue")
		.fadeOut()
		.delay(1000)
		.fadeIn()
	});

	$('#vermelho').click(function(){
		$('p').css("color", "red");
		$('#mensagem')
		.text("Cor alterada com sucesso.")
		.css('color', 'red')
		.css('border','1px solid red')
		.delay(3000)
		.fadeOut('fast');
	});
});*/

//Declarando multiplos CSS
/*
$(function(){
	$('#azul').click(function(){
		$('p')
		.css("color", "blue")
		.fadeOut()
		.delay(1000)
		.fadeIn()
	});

	$('#vermelho').click(function(){
		$('p').css("color", "red");
		$('#mensagem')
		.text("Cor alterada com sucesso.")
		.css({color:'red', border:'1px solid red'})
		.delay(3000)
		.fadeOut('fast');
	});
});
*/

//Aplicando Class

$(function(){
	$('#azul').click(function(){
		$('p')
		.css("color", "blue")
		.fadeOut()
		.delay(1000)
		.fadeIn()
	});

	$('#vermelho').click(function(){
		$('p').css("color", "red");
		$('#mensagem')
		.text("Cor alterada com sucesso.")
		.css({color:'red', border:'1px solid red'})
		.delay(3000)
		.fadeOut('fast')
		.addClass('green');//adicionando classe

		$('button').removeClass('red');//remove classe.
	});
});