const burger = document.querySelector(".burger");
const menu = document.querySelector(".list");
burger.addEventListener("click",()=>{
    burger.classList.toggle("active")
    menu.classList.toggle("active")
})