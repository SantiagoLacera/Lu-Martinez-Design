const navbar = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');

  } else {
    navbar.classList.remove('scrolled');
    btn1.classList.remove('scrolled');
  }
});

const navbarLinks = document.querySelectorAll('.navbar-menu ul li a');

navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.add('scrolled');

  });
});