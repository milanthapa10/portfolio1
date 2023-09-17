// navigation code
const navigation = document.querySelector(".mid-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 645) {
    navigation.classList.add("navigation-scrolled");
  } else if (window.scrollY <= 645) {
    navigation.classList.remove("navigation-scrolled");
  }
});

// ham menu code

let hambtn = document.getElementById("hammenu");
let midnav = document.querySelector(".mid-nav");
let crossicon = document.querySelector(".fa-xmark");
let hamicon = document.querySelector(".fa-bars");

hambtn.addEventListener("click", function () {
  if (midnav.style.opacity === "0") {
    midnav.style.opacity = "1";
    hamicon.style.display = "none";
    crossicon.style.display = "block";
  } else {
    midnav.style.opacity = "0";
    crossicon.style.display = "none";
    hamicon.style.display = "block";
  }
});

// AOS onscroll animation

AOS.init({
  offset: 120,
  delay: 200,
  duration: 800,
});
