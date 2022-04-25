// Store the wallet amount to your local storage with key "amount"
function wallet1(a){
    this.amt=a;
}
let arr=JSON.parse(localStorage.getItem("amount"))||0;
function addto(){
    event.preventDefault();
    let amt=document.getElementById("amount").value;
    let wallet=document.getElementById("wallet");
    wallet.innerText=amt;
    let p=new wallet1(amt)
    arr=p;
    localStorage.setItem("amount",JSON.stringify(arr));
}