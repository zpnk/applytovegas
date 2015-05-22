(function($) {

  // UX Functions
  function faqs() {
    $faqs = $('.faqs li')
    $faqs.on('click', function() {
      $faqs.removeAttr('class')
      $(this).addClass('open')
    })
  }

  function navigateOnRoleSelect() {
    $('select.roles').on('change', function() {
      window.location = '/' + this.dataset.for + '?role=' + this.value
    })
  }

  function smoothScrollNav() {
    $('nav a').on('click', function() {
      var $target = $(this.hash)
      if ($target) {
        $('html, body').animate({
          scrollTop: $target.offset().top
        }, 200, 'linear')
      }
      return false
    })
  }

  // Init
  faqs()
  navigateOnRoleSelect()
  smoothScrollNav()

})(jQuery)
