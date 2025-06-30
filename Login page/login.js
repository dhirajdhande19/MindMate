console.log("login page");
let eyeC = document.querySelector("#eyeClose");
let eyeO = document.querySelector("#eyeOpen");
let pass= document.querySelector("input[type='password']");
let inpPass = document.querySelector("inpPass");
let eyeClose = document.querySelector(".fa-eye-slash");
let eyeOpen = document.querySelector(".fa-eye2");
eyeC.addEventListener("click",function(){
    console.log("clicked");
    pass.type="text";
    eyeClose.classList.remove("fa-eye-slash");
    eyeOpen.classList.add("fa-eye");
});
eyeO.addEventListener("click",function(){
    console.log("clicked");
    pass.type="password";
    eyeOpen.classList.remove("fa-eye");
    eyeClose.classList.add("fa-eye-slash");
});