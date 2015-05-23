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

  function submitForms() {
    $('form').on('submit', function(e) {
      e.preventDefault()
      var $self = $(this)
      $.ajax({
        method: 'post',
        data: $self.serializeArray()
      })
      .done(function(data) {
        $('.page').fadeOut(function() {
          $self.trigger('reset')
          $('.name-tpl').html(data.name)
          $('.success').fadeIn()
        })
      })
      .fail(function(errors) {
        $('.error').removeClass('error')
        $('.error-msg').remove()

        var errorDetails = JSON.parse(errors.responseText).details
        errorDetails.forEach(function(error) {
          if (~error.message.indexOf('empty')) return
          var $field = $('[name='+error.path+']')

          if (error.path === 'roles') {
            $field = $('.checkboxes')
            error.message = 'please select at least one role'
          }

          $field.addClass('error')
          $field.after("<div class='error-msg'>" +
            error.message.replace(/"/g, '')+'.</div>')
        })
      })
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
  submitForms()

})(jQuery)
