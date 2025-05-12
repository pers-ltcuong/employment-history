// Sticky Navbar Effect
const navbar = document.querySelector('header');
window.onscroll = () => {
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};
