var btn = document.querySelector('.main-main__search-block__btn'),
  modal = document.querySelector('.main-main__search-block__modal-window');

btn.addEventListener('click', function(event) {
  event.preventDefault();
  modal.classList.toggle("main-main__search-block__modal-window_display_none");
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (!modal.classList.contains("main-main__search-block__modal-window_display_none")) {
      modal.classList.add("main-main__search-block__modal-window_display_none");
    }
  }
});