// open menu on mobile, toggle 'open' class on body when click on burger
const burger = document.querySelector('.burger');
const body = document.body;

burger.addEventListener('click', () => {
  body.classList.toggle('open');
});

// Remove 'open' class when clicking on a nav-link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    body.classList.remove('open');
  });
});

// redirect to thank you page when submit the form
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  window.location.href = 'thank-you.html'; 
});



//accordions
const accordions = document.querySelectorAll(".accordion");
for(item of accordions) {
  item.addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
      } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
      }
  })
}