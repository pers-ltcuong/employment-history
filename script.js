// Scroll-triggered Animations
const sections = document.querySelectorAll('section');

const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
