'use sctrict';

(function () {
  var mainNav = document.querySelector('.main-nav'),
    menuBtn = mainNav.querySelector('.main-nav__btn'),
    menu = mainNav.querySelector('.main-nav__nav-list'),
    socials = document.querySelector('.socials'),
    twitterLikes = socials.querySelector('.socials__likes--twitter'),
    facebookLikes = socials.querySelector('.socials__likes--facebook'),
    twitterLikesNumber = parseInt(twitterLikes.textContent, 10),
    facebookLikesNumber = parseInt(facebookLikes.textContent, 10);

  var init = function () {
    mainNav.classList.remove('main-nav--no-js');
  };

  var openMenu = function () {
    menu.style.display = 'flex';
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    menuBtn.classList.remove('main-nav__btn--burger');
    menuBtn.classList.add('main-nav__btn--cross');
  };

  var closeMenu = function () {
    menu.style.display = 'none';
    mainNav.classList.add('main-nav--opened');
    mainNav.classList.remove('main-nav--closed');
    menuBtn.classList.add('main-nav__btn--cross');
    menuBtn.classList.remove('main-nav__btn--burger');
  };

  var clickMenuBtnHandler = function () {
    if (mainNav.classList.contains('main-nav--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  var likeClickHandler = function (evt) {
    var socialBtn = evt.target;
    if (socialBtn.classList.contains('btn--twitter')) {
      twitterLikesNumber += 1;
      twitterLikes.textContent = twitterLikesNumber;
    } else {
      facebookLikesNumber += 1;
      facebookLikes.textContent = facebookLikesNumber;
    }
  };

  window.addEventListener('load', init);
  menuBtn.addEventListener('click', clickMenuBtnHandler);
  socials.addEventListener('click', likeClickHandler);
})();