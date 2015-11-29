
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

//Знайти сумму всых простих чисел выд 0 до 100

var result = 18;

for (var i = 2; i < 100; i++) {
	if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
		result = result + i;
		//console.log(i);
	};
};

console.log("Сумма всіх простих чисел від 0 до 100: " + result);


// Заповнити масив рандомними числами та знайти середне арафметичне

var result = 0, a = 0, arr = [];

for (var i = 0; i < 10; i++) {
	arr[i] = Math.round(Math.random() * 10, 1);
	a += arr[i];
}
result = a / 10;
console.log(arr);
console.log(result);

// Заповнити масив рандомними числами та знайти максимальне та мінімальне значення

var arr = [], max = 0, min = 11;

for (var i = 0; i < 10; i++) {
	arr[i] = Math.round(Math.random() * 10, 1);
	if (arr[i] > max) {
		max = arr[i];
	};
	if (arr[i] < min) {
		min = arr[i];
	};
}
console.log(arr);
console.log("Максимальне: " + max);
console.log("Мінімальне: " + min);

// Заповнити двовимірний масив рандомними числами та знайти середне арафметичне

var result = 0, a = 0, arr = [[],[]];

for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		arr[[i],[j]] = Math.round(Math.random() * 10, 1);
		a += arr[[i],[j]];
	};
}
result = a / 100;
console.log(arr);
console.log(result);

// Заповнити двовимірний масив рандомними числами та знайти середне арафметичне

var arr = [[],[]], max = 0, min = 11;

for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		arr[[i],[j]] = Math.round(Math.random() * 10, 1);
		a += arr[[i],[j]];
		if (arr[[i],[j]] > max) {
			max = arr[[i],[j]];
		};
	if (arr[[i],[j]] < min) {
			min = arr[[i],[j]];
		};
	};
}
console.log(arr);
console.log("Максимальне: " + max);
console.log("Мінімальне: " + min);