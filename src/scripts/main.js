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

  /* placeholder to top */
  $('.contact__input').focus(function () {
    $(this).addClass('contact__input--focus');
  }).blur(function () {
    $(this).removeClass('contact__input--focus');
  });
  /* /placeholder to top */
});
