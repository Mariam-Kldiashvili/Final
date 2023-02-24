
let mobileMenu = document.querySelector(".navigation_ul");

let burger = document.querySelector(".fa-bars");

let xmark = document.querySelector(".fa-xmark");

burger.addEventListener("click", function(){
    mobileMenu.classList.add("show");
    burger.style.display = "none";
    xmark.style.display = "block";

} );

xmark.addEventListener("click", function(){
    mobileMenu.classList.remove("show");
    xmark.style.display = "none";
    burger.style.display = "block";
    
} );
