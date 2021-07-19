

function goPayment(){
    let aform = document.getElementById("addForm") 
    
    let j_add = aform.address.value;
    let j_pin =aform.pin.value;

let address = {
    j_add,
    j_pin
};

let arr ;
arr = localStorage.getItem("Addresss");

if(arr == null){
    arr=[];
}
else{
    arr=JSON.parse(localStorage.getItem("Addresss"));

}
arr.push(address);
localStorage.setItem('Addresss',JSON.stringify(arr));

window.location.href="payment.html"
}