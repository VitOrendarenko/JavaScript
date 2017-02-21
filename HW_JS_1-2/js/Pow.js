function pow( x, n) {
	var result = x;

	for (var i = 1; i < n; i++) {
			result *= x;
	}

	return result;
}

var x = prompt("Укажите число!", '');
console.log( "число -", x);
var n = prompt("Укажите степень!", '');
console.log( "в степени -", n);

if (n <= 1) {
	alert( 'Степень ' + n + 'не поддерживается, введите целую степень, большую 1');
} else {
	alert( pow(x, n) );
	console.log( "Равно: ", pow(x, n) );
	console.log("____________________");
}
