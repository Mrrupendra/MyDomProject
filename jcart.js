var dataCo = document.getElementById("item")
var countCo = document.getElementById("count")
var divCount = document.createElement('div');
var divTotal = document.createElement('div');
var total_j = document.createElement('p');

var i =0;

function appendJewellery(jl){

    var divItems = document.createElement('div');

    let name_j = document.createElement('p');
    name_j.innerHTML=jl.j_name;
    name_j.style.marginLeft ="4%"

    let price_j = document.createElement('p');
    price_j.textContent = `Rs-${jl.j_price}`;
    price_j.style.marginLeft = "4%";

    let image_j = document.createElement('img');
    image_j.src = jl.j_image;

    divItems.append(name_j,price_j,image_j);

    divItems.style.borderRadius = "5px";
    divItems.style.width = "50%";
    divItems.style.marginTop = "4%";
    divItems.style.color ="#E84A5F";
    divItems.style.backgroundColor ="#2A363B";
    dataCo.append(divItems);
}

function showCart(){
    let data = JSON.parse(localStorage.getItem("jcart"));
    dataCo.innerHTML = null;

    data.forEach(function(jl){

       appendJewellery(jl);
        
    });
}
showCart();

function countJewellery(){
    let data = JSON.parse(localStorage.getItem("jcart"));
    let count = data.length;

    let count_j = document.createElement('p');
    count_j.innerHTML = `Total Items : ${count}`;
    count_j.style.fontSize = "20px";
    count_j.style.fontWeight="700";

    divCount.append(count_j);
    countCo.append(divCount);
}
countJewellery();

function totalPrice(){
    let data = JSON.parse(localStorage.getItem("jcart"));
    
    var tot = 0;
    for(var i =0; i<data.length; i++){
        tot+= parseInt(data[i].j_price);
    }

    let fin = tot;
    total_j.innerHTML = `Total Price : Rs - ${fin}`;
    total_j.style.fontSize = "20px";
    total_j.style.fontWeight="700";

    divTotal.append(total_j);
    divCount.append(divTotal);
}
totalPrice();

function applyPromo(){
    var promoCode = document.getElementById('promo').value;

    let data = JSON.parse(localStorage.getItem("jcart"));

    var tot = 0;
    for(var i =0; i<data.length; i++){
        tot+= parseInt(data[i].j_price);
    }
    var fin = tot;
    var final = 0;

    if(promoCode == "masai30"){
        var de = 30/100;
        var mult = fin*de;
        final = Math.floor(fin - mult);

        alert("Discount is Updated!");

        total_j.innerHTML = `Total Price : Rs - ${final}`;

        divTotal.append(total_j);
        divCount.append(divTotal);

    }
    else{
        alert("This Promo Code is wrong!");
    }
}

function checkOut(){
    window.location.href='checkOut.html';
}

