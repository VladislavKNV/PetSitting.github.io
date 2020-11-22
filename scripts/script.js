const menuIcon = document.getElementById("menu-icon");
const menuContainer = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
    menuContainer.classList.toggle("open");
    menuContainer.style.display="flex";

    if(!menuContainer.classList.contains("open")) {
        menuContainer.style.display="none";
    }
});
