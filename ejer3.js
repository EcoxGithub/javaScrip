

function ejer3(n1, n2, n3, t, mayor){

    var n1,n2,n3,t,mayor;
	n1 = parseInt(prompt("Inserta el primer numero:"));
	n2 = parseInt(prompt("Inserta el segundo numero:"));
	n3 = parseInt(prompt("Inserta el tercer numero:"));

	if (n1 > n2) {
		t = n1;
	}else{
		t = n2;
	}

	if (t > n3) {
		mayor = t;
	}else{
		mayor = n3;
	}

	alert("El número mayor es: "+mayor);
}
