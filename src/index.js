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


