var mensaje = document.querySelector("#input-texto");
var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopiar = document.querySelector("#btn-copiar");
var mostrarFinal = document.querySelector("#msg");


function encriptarReemplazo (letras) {
	if (letras == 'a') {
		letras = 'ai';
		return letras;
	} else if (letras == 'e') {
        letras = 'enter';
        return letras;
	} else if (letras == 'i') {
        letras = 'imes';
        return letras;
    } else if (letras == 'o') {
        letras = 'ober';
        return letras;
    } else if (letras == 'u') {
        letras = 'ufat';
        return letras;
    }
}

function encriptar(texto) {
	var msgEncriptado = texto.replace(/a|e|i|o|u/g, encriptarReemplazo);
	return msgEncriptado;
}


function desencriptarReemplazo(letras) {
	if (letras == 'ai') {
		letras = 'a';
		return letras;
	} else if (letras == 'enter') {
		letras = 'e';
		return letras;
	} else if (letras == 'imes') {
		letras = 'i';
		return letras;
	} else if (letras == 'ober') {
		letras = 'o';
		return letras;
	} else if (letras == 'ufat') {
		letras = 'u';
		return letras;
	}
}

function desencriptar(texto) {
	var msgDesencriptado = texto.replace(/ai|enter|imes|ober|ufat/g, desencriptarReemplazo);
	return msgDesencriptado;
}


function verificarTexto(texto) {
	var restriccion = /[^a-zñ\s]/g;
	if (restriccion.test(texto)) {
		alert("No se permiten mayúsculas, acentos ni caracteres especiales");
		return false;
	} else {
		return true;
	}
}


btnEncriptar.addEventListener('click',function (event) {
	event.preventDefault();
	var texto = mensaje.value;
	var verificado = verificarTexto(texto);
	if (verificado == true) {
		var msgFinal = encriptar(texto);
		mostrarFinal.style.color = "";
		mostrarFinal.value = msgFinal;
	} else {
		mostrarFinal.style.color = "red";
		mostrarFinal.value = "Corrige e inténtalo de nuevo"
	}
});


btnDesencriptar.addEventListener('click', function (event) {
	event.preventDefault();
	var texto = mensaje.value;
	var verificado = verificarTexto(texto);
	if (verificado == true) {
		var msgFinal = desencriptar(texto);
		mostrarFinal.style.color = "";
		mostrarFinal.value = msgFinal;
	} else {
		mostrarFinal.style.color = "red";
		mostrarFinal.value = "Corrige e inténtalo de nuevo"	
	}
})


btnCopiar.addEventListener('click', function (event) {
	event.preventDefault();
	mostrarFinal.select();
	navigator.clipboard.writeText(mostrarFinal.value); 
	}
)


/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

