$('#Somar').click(function(){
	
	var valor1 = parseFloat($('#valor1').val());
	var valor2 = parseFloat($('#valor2').val());
	var resultado = valor1 + valor2; 

	$('#resultado').val(resultado);

	});

$('#Subtrair').click(function(){
	
	var valor1 = parseFloat($('#valor1').val());
	var valor2 = parseFloat($('#valor2').val());
	var resultado = valor1 - valor2; 

	$('#resultado').val(resultado);

	});

$('#Multiplicar').click(function(){
	
	var valor1 = parseFloat($('#valor1').val());
	var valor2 = parseFloat($('#valor2').val());
	var resultado = valor1 * valor2; 

	$('#resultado').val(resultado);

	});

$('#Dividir').click(function(){
	
	var valor1 = parseFloat($('#valor1').val());
	var valor2 = parseFloat($('#valor2').val());
	var resultado = valor1 / valor2; 

	$('#resultado').val(resultado);

	});