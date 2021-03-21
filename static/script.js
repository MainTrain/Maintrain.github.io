function toggleMenu() {
    console.log("navlinks were toggled");

    let navLinks = document.getElementById("navLinks");
    navLinks.style.display = (navLinks.style.display === "flex") ? "none" : "flex";
}


var portraitHovers = document.querySelectorAll('.portrait-hover');
var portrait = document.getElementById("portrait");

for (let portraitHover of portraitHovers) {
    portraitHover.addEventListener("mouseenter", (e) => {
        portrait.style.opacity = "0.7";
    })

    portraitHover.addEventListener("mouseleave", (e) => {
        portrait.style.opacity = "0";
    })
}