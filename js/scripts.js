window.onload = function () {
  if (window.matchMedia 
    && window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.getElementById("switch-theme").checked = true;
  }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  document.getElementById('switch-theme').click();
});

function toogleTheme() {
  const darkMode = './css/darkstyles.css';
  const lightMode = './css/lightstyles.css';

  document.getElementById('theme_css').href = 
    document.getElementById('switch-theme').checked == true
      ? darkMode
      : lightMode;

};

document.addEventListener('DOMContentLoaded', () => {
  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      const target = el.dataset.target;
      const $target = document.getElementById(target);

      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});

let mybutton = document.getElementById("top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.documentElement 
    || document.body.parentNode 
    || document.body).scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}