import "./styles.css";

function makeDropDown(item,btn,dropdown) {
    btn.addEventListener("mouseover", () => {
        dropdown.style.display = "flex";
    });
    item.addEventListener("mouseleave", () => {
        dropdown.style.display = "none";
    });
}

const academics = document.querySelector(".academics");
const academicBtn = academics.querySelector(".btn");
const academicOptns = academics.querySelector(".dropdown");
makeDropDown(academics,academicBtn,academicOptns);

const fiction = document.querySelector(".fiction");
const fictionBtn = fiction.querySelector(".btn");
const fictionOptns = fiction.querySelector(".dropdown");
makeDropDown(fiction,fictionBtn,fictionOptns);

const spirit = document.querySelector(".spirit");
const spiritBtn = spirit.querySelector(".btn");
const spiritOptns = spirit.querySelector(".dropdown");
makeDropDown(spirit,spiritBtn,spiritOptns);

let timer = setInterval(()=>{next.click();},5000);
const slides = [...document.querySelectorAll(".slide")];
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const circles = [...document.querySelectorAll(".circle")];
prev.addEventListener("click",()=>{
    let activeIdx = getActiveIdx();
    let nxt = activeIdx-1;
    if(nxt<0) nxt = slides.length-1;
    activateSlide(activeIdx,nxt);
});
next.addEventListener("click",()=>{
    let activeIdx = getActiveIdx();
    let nxt = activeIdx+1;
    if(nxt>=slides.length) nxt = 0;
    activateSlide(activeIdx,nxt);
});
function getActiveIdx(){
    return slides.indexOf(document.querySelector(".active"));
}
function activateSlide(old,nxt){
    slides[old].classList.remove("active");
    slides[nxt].classList.add("active");
    circles[old].classList.remove("active");
    circles[nxt].classList.add("active");
    clearInterval(timer);
    timer = setInterval(()=>{next.click();},5000);
}
for(let idx = 0;idx<circles.length;idx++){
    circles[idx].addEventListener("click",()=>{
        let active = getActiveIdx();
        activateSlide(active,idx);
    });
}





