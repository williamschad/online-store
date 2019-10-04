function item(name, priceEle) {
	this.name = name
	this.price = priceEle;
};

let T_Shirt = new item ("ADIDAS ORIGINAL MEN'S BLACK TREFOIL T-SHIRT", 299.95);
let SABALO = new item ("ADIDAS ORIGINALS", 1000.00);
let Pharrell_Williams = new item ("SABALO - core black/ftwr white/core black", 1099.00);
let Adidas_Originals = new item ("Adidas Ultra-Boost", 1500.00);
let Adidas_Ultra_Boost = new item ("Adidas pharrell williams White Running Shoes", 1599.00);

sessionStorage.setItem("Catalogue", JSON.stringify([T_Shirt, SABALO, Pharrell_Williams, Adidas_Originals, Adidas_Ultra_Boost]));


var amount = parseInt(localStorage.getItem("Amount"));
if (!amount) {
	amount = 0;
	var items = [];
	localStorage.setItem("Items", JSON.stringify(items));
} else {
	var items = JSON.parse(localStorage.getItem("Items"));
};

localStorage.setItem("Amount", amount);

if (!items) {
}

function addtocart1(){
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[0]];
	} else {
		b.push(a[0]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[0].price);
	alert("The current total of the items is R" + c);
};

function addtocart2() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[1]];
	} else {
		b.push(a[1]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[1].price);
	alert("The current total of the items is R" + c);
};

function addtocart3() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[2]];
	} else {
		b.push(a[2]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[2].price);
	alert("The current total of the items is R" + c);
};

function addtocart4() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[3]];
	} else {
		b.push(a[3]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[3].price);
	alert("The current total of the items is R" + c);
};

function addtocart5() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[4]];
	} else {
		b.push(a[4]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[4].price);
	alert("The current total of the items is R" + c);
};


