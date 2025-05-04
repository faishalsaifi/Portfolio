particlesJS.load('particles-js', 'particlesjs-config.json', function() {
    console.log('particles.js loaded');
  });
document.addEventListener('DOMContentLoaded', function () {
  const collapse = document.getElementById('navbarTogglerDemo02');
  const headerMain = document.querySelector('.header-main');

  collapse.addEventListener('show.bs.collapse', function () {
    headerMain.classList.add('no-padding');
  });

  collapse.addEventListener('hidden.bs.collapse', function () {
    headerMain.classList.remove('no-padding');
  });
});
AOS.init({
    duration:1000,
    offset:100
});

