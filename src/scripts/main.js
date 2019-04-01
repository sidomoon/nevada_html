$(document).ready(function () {
  /* focus on input */
  $('.subscribe__input')
  .focus(function () {
    $('.subscribe__form').addClass('subscribe__form--focus');
  })
  .blur(function () {
    $('.subscribe__form').removeClass('subscribe__form--focus');
  });
  /* /focus on input */

  /* input validation */
  $('.subscribe__input').blur(function () {
    if ($(this).is(':invalid')) {
      $('.subscribe__form').addClass('subscribe__form--not-valid');
    } else {
      $('.subscribe__form').removeClass('subscribe__form--not-valid');
    }
  });
  /* /input validation */

  /* placeholder to top */
  $('.contact__js').focus(function () {
    $(this).addClass('contact__js--focus');
  })
  .blur(function () {
    var value = $(this).val();
    if (value === '') {
      $(this).removeClass('contact__js--focus');
    }
  });
  /* /placeholder to top */

  /* masonry */
  $('.media__list').masonry({
  itemSelector: '.media__item',
  columnWidth: 500
});
  /* /masonry */

  /* menu toggle */
  var menu = document.querySelector('.page-header__menu'),
      toggle = document.querySelector('.page-header__toggle');

  menu.classList.remove('page-header__menu--open');
  menu.classList.add('page-header__menu--closed');

  toggle.addEventListener('click', function() {
    if (menu.classList.contains('page-header__menu--closed')) {
      menu.classList.remove('page-header__menu--closed');
      menu.classList.add('page-header__menu--open');
    } else {
      menu.classList.remove('page-header__menu--open');
      menu.classList.add('page-header__menu--closed');
    }
  });
  /* /menu toggle */
});
