/* global document, window */
const navbar = document.querySelector('.navbar');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarLinks = document.querySelectorAll('.navbar-menu ul li a');
const homeBtn = document.querySelector('.navbar-logo');
const navBtn = document.querySelector('.btn1');
const formBtn = document.querySelector('.btn2');
const logo1 = document.querySelector('.container-image-about');
const leftDecoration = document.querySelector(".form-left-decoration");
const rightDecoration = document.querySelector(".form-right-decoration");
const circle = document.querySelector('.circle');
const home = document.querySelector('html');


window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.add('scrolled');

  });
});

homeBtn.addEventListener('click', () => {
  // Update the margin style of the div element to 0
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


formBtn.addEventListener("mouseenter", function () {
  leftDecoration.classList.add("active");
  rightDecoration.classList.add("active");
});

formBtn.addEventListener("mouseleave", function () {
  leftDecoration.classList.remove("active");
  rightDecoration.classList.remove("active");
});

/* Send email function */


