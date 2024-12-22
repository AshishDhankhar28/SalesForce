const nav= document.querySelector("nav");

window.addEventListener("scroll",function(){
    nav.classList.toggle("sticky",this.window.scrollY>0);
})


const button=document.querySelector(".copyright_ke_liye");
const phonenumber=document.querySelector(".contact");


button.addEventListener('click',function(){
    document.querySelector(".contact").innerHTML="Phone Number:- 9958344151";
})