const menuIcon = document.getElementById("menu-icon");
const menuContainer = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
    menuContainer.classList.toggle("open");
    menuContainer.style.display="flex";

    if(!menuContainer.classList.contains("open")) {
        menuContainer.style.display="none";
    }
});

let containerImg = document.getElementById("gallery");
containerImg.addEventListener('click', e => {
    e.stopPropagation();
    e.target.style.width = '100vw';
    e.target.style.height = '150vh';
    e.target.style.position = 'relative';
    e.target.style.zindex = 2;
    e.target.style.opacity = '1';
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
