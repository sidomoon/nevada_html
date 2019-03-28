$(document).ready(function () {
  /* focus on input */
  $('.subscribe__input').focus(function () {
    $('.subscribe__form').addClass('subscribe__form--focus');
  }).blur(function () {
    $('.subscribe__form').removeClass('subscribe__form--focus');
  });
  /* /focus on input */

  /* input validation */
  $(function () {
    $('.subscribe__input').blur(function () {
      if ($(this).is(':invalid')) {
        $('.subscribe__form').addClass('subscribe__form--not-valid');
      } else {
        $('.subscribe__form').removeClass('subscribe__form--not-valid');
      }
    });
  });
  /* /input validation */

  /* placeholder to top input */
  $('.contact__input').focus(function () {
    $(this).addClass('contact__input--focus');
  }).blur(function () {
    if ($(this).is(':invalid')) {
      $(this).removeClass('contact__input--focus');
    }
  });
  /* /placeholder to top input */

  /* placeholder to top textarea */
  $('.contact__textarea').focus(function () {
    $(this).addClass('contact__textarea--focus');
  }).blur(function () {
    if ($(this).is(':invalid')) {
      $(this).removeClass('contact__textarea--focus');
    }
  });
  /* /placeholder to top textarea */
});
