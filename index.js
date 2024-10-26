const menu = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

const searchNav = document.querySelector('.search_nav');
const searchImg = document.querySelector('.search-img');
const searchInput = document.querySelector('#search');
const googleImg = document.querySelector('.google-img');

searchImg.addEventListener('click', () => {
  searchNav.classList.toggle('active');
})

menu.addEventListener("click", () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
});

// Scroll Reveal

window.onscroll = () => {
  menu.classList.remove("move");
  navbar.classList.remove("open-menu");
};

// Input Form Data

window.onload = () => {
  let today = new Date().toISOString().split("T")[0];
  document.getElementById("start-date").value = today;
  document.getElementById("return-date").value = new Date(
    Date.new() + 7 * 86400000
  )
    .toISOString()
    .split("T")[0];
};

// Scroll Reveal

const animate = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: "400",
  reset: true,
});

animate.reveal(".nav, .heading");
animate.reveal(".home-img img", { origin: "right" });
animate.reveal(".input-form", { origin: "bottom" });
animate.reveal(".trend-box, .team-box, .rental-box, .t-box, .newsletter, .footer-content",  { interval: 100 });
