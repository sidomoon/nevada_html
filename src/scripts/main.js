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
  itemSelector: '.media__item'
});
  /* /masonry */

  /* menu toggle */
  $('.page-header__toggle').on('click', function() {
    if ($('.page-header__menu').hasClass('page-header__menu--closed')) {
      $('.page-header__menu').removeClass('page-header__menu--closed').addClass('page-header__menu--open');
      $('html').css('overflow', 'hidden');
    } else {
      $('.page-header__menu').addClass('page-header__menu--closed').removeClass('page-header__menu--open');
      $('html').css('overflow', 'scroll');
    }
  });
  /* /menu toggle */
});
