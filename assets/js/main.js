const openNavBtn = document.querySelector(".header__open-nav");
const closeNavBtn = document.querySelector(".header__close-nav");

openNavBtn.addEventListener("click",toggleNav);
closeNavBtn.addEventListener("click",toggleNav);

function toggleNav() {
   document.querySelector(".header__nav").classList.toggle("open");
};

let body = document.querySelector("body"),
   lightBox = document.querySelector(".lightBox"),
   img = document.querySelectorAll(".gImg"),
   showImg = lightBox.querySelector(".showImg img"),
   close = lightBox .querySelector(".close");

for (let image of img) {
 image.addEventListener("click", ()=>{
   showImg.src = image.src;
   lightBox.style.display = "block";
   body.style.overflow = "hidden";
   close.onclick = ()=>{
     lightBox.style.display = "none";
     body.style.overflow = "visible";
   };
 });
}


