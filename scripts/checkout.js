// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let data=JSON.parse(localStorage.getItem("movie"));
let a=JSON.parse(localStorage.getItem("amount"));
let w=document.getElementById("wallet").innerText=a.amt
const m=document.getElementById("movie")
data.forEach(function(ele){
  let div=document.createElement("div");
  let image=document.createElement("img");
  image.src=ele.Poster;
  let t=document.createElement("p");
  t.innerText=ele.Title;
  div.append(t,image);
  m.append(div)
})
let confirm=document.getElementById("confirm").addEventListener("click",add_amount)
let co=document.getElementById("number_of_seats").value;
function add_amount(){
  amount=JSON.parse(localStorage.getItem("amount"));
  let p=document.getElementById("number_of_seats").value;
 if(amount.amt<p*100-amount.amt){
     w.innerText=(amount.amt<p*100-amount.amt)-amount.amt
     alert("insuffi..")
 }
 else{
     alert("sucee")
 }
  
}
