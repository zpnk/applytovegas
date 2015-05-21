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

  // Init
  faqs()
  navigateOnRoleSelect()

})(jQuery)
