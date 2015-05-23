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

  function preselectRoleField() {
    var role = params().role
    $('input[value='+role+']').prop('checked', true)
    $('select').val(role)
  }

  function addExtraLinkFields() {
    $('form').on('keyup', 'input.link', function() {
      var $self = $(this)
      var $next = $self.next()
      if ($self.val()) {
        if (!$next.length) {
          var $another = $self.clone().val(null).attr('placeholder', 'Add another link')
          $self.after($another)
        }
        $self.attr('name', 'links[]')
      } else {
        if ($next.length && !$next.val()) {
          $self.removeAttr('name')
          $next.remove()
        }
      }
    })
  }

  // Helpers
  function params() {
    var params = {}
    if (search = window.location.search) {
      var queries = search.substring(1).split('&')
      queries.forEach(function(query) {
        var param = query.split('=')
        params[param[0]] = decodeURIComponent(param[1].replace(/\+/g, ' '))
      })
    }
    return params
  }

  // Init
  faqs()
  navigateOnRoleSelect()
  smoothScrollNav()
  preselectRoleField()
  addExtraLinkFields()

})(jQuery)
