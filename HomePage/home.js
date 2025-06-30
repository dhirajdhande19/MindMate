console.log("home page");
let threeLine = document.querySelector(".arrowBtn");
let getHelp = document.querySelector(".getHelp1");
let login = document.querySelector(".login1");
let signUp = document.querySelector(".signUp1");
let crossBtn = document.querySelector(".wrongBtn");
threeLine.addEventListener("click",function(){
    console.log("clicked");
    getHelp.style.display = "block";
    login.style.display = "block";
    signUp.style.display = "block";
    threeLine.style.display = "none";
    crossBtn.style.display = "block";
});
crossBtn.addEventListener("click",function(){
    console.log("cliked");
    crossBtn.style.display = "none";
    threeLine.style.display = "block";
    getHelp.style.display = "none";
    login.style.display = "none";
    signUp.style.display = "none";
})