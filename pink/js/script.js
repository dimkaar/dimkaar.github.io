let mainHeader = document.querySelector('.main-header');
let mainNav = document.querySelector('.main-nav');
let burgerBtn = document.querySelector('.main-nav__toggle');

mainHeader.classList.remove('main-header--no-js');
mainNav.classList.remove('main-nav--no-js');
mainNav.classList.remove('main-nav--opened');

if (burgerBtn) {
  burgerBtn.addEventListener('click', function(){
    if(!mainNav.classList.contains('main-nav--opened')) {
      mainNav.classList.add('main-nav--opened');
      mainHeader.classList.add('main-header--opened');
    } else {
      mainNav.classList.remove('main-nav--opened');
      mainHeader.classList.remove('main-header--opened');
    }
  });
}
