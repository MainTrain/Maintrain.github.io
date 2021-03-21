// toggle the menu open/closed with its css display property
function toggleMenu() {
    console.log("navlinks were toggled");

    let navLinks = document.getElementById("navLinks");
    navLinks.style.display = (navLinks.style.display === "flex") ? "none" : "flex";
}

// when you resize the window, if the display of the menu is not flex, set it to flex
// this prevents the menu from not displaying on window resize
window.onresize = () => {
    let navlinks = document.getElementById("navLinks");
    if (navlinks.style.display != "flex") navlinks.style.display = "flex";
}

// showing the small portrait next to logo
var portraitHovers = document.querySelectorAll('.portrait-hover');
var portrait = document.getElementById("portrait");

// adding event listeners to each portrait hover element
for (let portraitHover of portraitHovers) {
    // when your mouse enters the element, raise the opacity of the portrait
    portraitHover.addEventListener("mouseenter", () => {
        portrait.style.opacity = "0.7";
    })

    // when your mouse leaves the element, set the opacity to 0
    portraitHover.addEventListener("mouseleave", () => {
        portrait.style.opacity = "0";
    })
}

// SLIDESHOW SECTION
var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    // getting all the elements with class name slide
    var slides = document.getElementsByClassName("slide");

    // if there are no slides, GET OUTTA THERE
    // it will thow an error if you try to go beyond this point
    if (!slides.length > 0)
        return;

    // overflow handling
    if (n >= slides.length) slideIndex = 0
    if (n < 0) slideIndex = slides.length-1

    // set all displays to none
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // set only the current slide's display to block
    slides[slideIndex].style.display = "block";

    // select the indicator
    let indicator = document.querySelector(".indicator");

    // show the index+1 because ARRAYS START AT 0 (NOT IN MATLAB)
    indicator.innerHTML = `${slideIndex+1}/${slides.length}`;
}