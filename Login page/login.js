let input = document.getElementById("input");
let span = document.querySelector(".passEye");
let i = document.querySelector(".passEye i");

function pass (){
        if(input.type == "password"){
            input.type = "text";
            span.innerHTML = `<i class="fa-regular fa-eye"></i>`;
            
    }else{
        input.type = "password";
        span.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
    }
 }
