const navbar = document.querySelector('.navbar');
const homeBtn = document.querySelector('.navbar-logo');
const home = document.querySelector('html');


window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');

  } else {
    navbar.classList.remove('scrolled');
  }
});

const navbarLinks = document.querySelectorAll('.navbar-menu ul li a');

navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.add('scrolled');

  });
});

homeBtn.addEventListener('click', () => {
  // Update the margin style of the div element to 0
  home.style.margin = '0';
});