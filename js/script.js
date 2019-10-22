var navMain = document.querySelector('.main-menu');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('main-menu--nojs');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('page-header__toggle-open')) {
    navToggle.classList.remove('page-header__toggle-open');
  } else {
    navToggle.classList.add('page-header__toggle-open');
  }
  });

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-menu--closed')) {
    navMain.classList.remove('main-menu--closed');
  } else {
    navMain.classList.add('main-menu--closed');
  }

});
