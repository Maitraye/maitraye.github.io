(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Researcher. Educator. Roamer"],
      typeSpeed: 70,
      loop: true,
      showCursor: false
    });
  });

  $('ul.term-list').each(function(){
    if( $(this).find('li').length > 5){    
      $('li', this).eq(4).nextAll().hide().addClass('toggleable');
      $(this).append('<li class="cursorShown">See More...</li>');    
    }
    $(this).on('click','.cursorShown', toggleShow);
  });


  function toggleShow(){
    var opened = $(this).hasClass('less');  
    $(this).text(opened ? 'See More...' : 'See Less...').toggleClass('less', !opened);    
    $(this).siblings('li.toggleable').slideToggle();
  }

})(jQuery); // End of use strict
