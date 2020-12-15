const menuIcon = document.getElementById("menu-icon");
const menuContainer = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
    menuContainer.classList.toggle("open");
    menuContainer.style.display="flex";
    menuIcon.style.width="20px";

    if(!menuContainer.classList.contains("open")) {
        menuContainer.style.display="none";
        menuIcon.style.width="50px";
    }
});


let slideIndex = 1;
showSlides(slideIndex);

function addSlide(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('carousel-item');

    if (n > slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex=slides.length
    }
    for(i=0; i< slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

console.log(containerImg);

var xml="<?xml version = '1.0'?>"+
"<head>Home</head>"
parser = new DOMParser();
xmlDoc = parser.parseFromString(xml,"text/xml");
var names =xmlDoc.getElementsByTagName("head");
var title = document.getElementsByTagName("title");
title[0].innerHTML=names[0].innerHTML;
