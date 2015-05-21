(function($) {

  // UX Functions
  function faqs() {
    $faqs = $('.faqs li')
    $faqs.on('click', function() {
      $faqs.removeAttr('class')
      $(this).addClass('open')
    })
  }

  // Init
  faqs()

})(jQuery)
