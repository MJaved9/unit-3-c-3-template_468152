// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


let data=JSON.parse(localStorage.getItem("amount"));
let w=document.getElementById("wallet");
w.innerText=data.amt;
async function show(){
    try{
      const query=document.getElementById("search").value;
      const res=await fetch(`https://www.omdbapi.com/?apikey=2b79427&s=${query}`);
      const movi=await res.json();
      movie=movi.Search;
      // console.log(movie)
      return movie;
    }
    catch(err){
        console.log(err)
    }
}

const box=document.getElementById("movies");
function append_data(movie){
  movie.map(function(ele){
    let div=document.createElement("div");
    div.setAttribute("class","movi_tab");
    let image=document.createElement("img")
    image.src=ele.Poster;
    let p=document.createElement("p");
    p.innerText=ele.Title;
    let btn=document.createElement('button');
    btn.innerText="Book now";
    btn.setAttribute("class","book_now");
    btn.addEventListener("click",function(){
      booking(ele);
    })
    div.append(image,p,btn);
    box.append(div)
  })
}
async function main(){
  let movie=await show();
  if(movie==undefined){
    return false
  }
  console.log(movie);
  append_data(movie)
}
let id;
function debounce(func,delay){
  if(id){
    clearTimeout(id)
  }
  id=setTimeout(function(){
    append_data(movie)
    let div=document.getElementById("movies");
    div.style.display="block"
  },delay)
}
let arr=JSON.parse(localStorage.getItem("movie"))||[];
function booking(ele){
  arr.push(ele);
  localStorage.setItem("movie",JSON.stringify(arr))
  window.location=("Checkout.html")
}