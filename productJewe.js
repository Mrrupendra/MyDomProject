var dataDiv = document.getElementById("jewe");

function storeJewellery(){
    let form = document.getElementById("jForm");

    let j_name = form.jname.value;
    let j_price = form.jprice.value;
    let j_image = form.jimg.value;

    let jewellery = {
        j_name,
        j_price,
        j_image
    };

    let arr;

    arr = localStorage.getItem("jewellerys");

    if(arr == null){
        arr = [];
    }
    else{
        arr = JSON.parse(localStorage.getItem("jewellerys"));
    }

    arr.push(jewellery);
    localStorage.setItem('jewellerys',JSON.stringify(arr));
    showJewellerys();
    //console.log(arr);
}

function appendJewellery(jl){

      var divItems = document.createElement("div");

      let name_j = document.createElement('p');
      name_j.innerHTML = jl.j_name;

      let price_j = document.createElement('p');
      price_j.innerHTML = jl.j_price;

      let image_j = document.createElement('img');
      image_j.src = jl.j_image;

      let butt = document.createElement('button');
      butt.textContent = 'Add to J-Cart';

      butt.addEventListener('click',function(){
          addtoJcart(jl)
      });
        butt.style.display = "block";
        butt.style.width="50%";
        butt.style.height="40px";
        butt.style.margin ="auto";
        butt.style.backgroundColor="#E84A5F";
        butt.style.color = "#2A363B";
        butt.style.border= "0px";
        butt.style.borderRadius = "5px";
        butt.style.fontWeight="700"

      divItems.append(name_j,price_j,image_j,butt);
      divItems.style.width ="50%";
      dataDiv.append(divItems);

}

function showJewellerys(){
      
     let data = JSON.parse(localStorage.getItem("jewellerys"));
     dataDiv.innerHTML = null;

     data.forEach(function(jl) {

         appendJewellery(jl)
         
     });
}
showJewellerys();

function addtoJcart(itm){
   
    let arr;

    arr = localStorage.getItem("jcart");

    if(arr == null){
        arr =[];
    }
    else{
        arr = JSON.parse(localStorage.getItem("jcart"));
    }
    arr.push(itm);
    localStorage.setItem('jcart', JSON.stringify(arr));

}
function showCart(){

     window.location.href = 'jcart.html';
}
