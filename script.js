
var a, b, c, c, D, x, x1, x2;


a = 4;
b = 3;
c = 1
console.log("Медот через if")
D = b*b-4*a*c;

if (D == 0) {
	x = -b/(2*a)
	console.log(x);
}

else if (D > 0) {
	x1 = (-b+Math.sqrt(D))/(2*a);
	x2 = (-b-Math.sqrt(D))/(2*a);
	console.log(x1);
	console.log(x2);
}

else {
	x = "Error";
console.log(x);
}


console.log("Медот через case")
D = b*b-4*a*c;
D = D / Math.abs(D);
switch (D) {
	case -1 :
		x = "Error";
		console.log(x);
	break;
	case 1 :
		D = b*b-4*a*c;
		x1 = (-b+Math.sqrt(D))/(2*a);
		x2 = (-b-Math.sqrt(D))/(2*a);
		console.log(x1);
		console.log(x2);
	break;
	default :
		D = b*b-4*a*c;
		x = -b/(2*a)
		console.log(x);
		
	break;
}