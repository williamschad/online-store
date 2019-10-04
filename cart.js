var amount = parseInt(localStorage.getItem("Amount"));
document.getElementById("itemTotal").append(amount);

var a = JSON.parse(localStorage.getItem("Items"));
var b = document.getElementById("Stuff");

a.forEach(function(z) {
    var c = document.createElement("div");
    b.appendChild(c);

    var n = document.createElement("div");
    n.innerHTML = z.name + " " +z.price;
    c.appendChild(n);
});


//This code helps the shopping cart function.