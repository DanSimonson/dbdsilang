$(document).ready(function(){
    
      //initial check to make sure jquery loaded
      //alert('jquery loaded');
      $(function() {
        // Smooth Scrolling
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });

      window.sr = ScrollReveal();
      sr.reveal('.navbar', {
        duration: 3000,
        origin:'bottom'
      });
      sr.reveal('.showcase-left', {
        duration: 3000,
        origin:'top',
        distance:'300px'
      });
      sr.reveal('.showcase-right', {
        duration: 3000,
        origin:'right',
        distance:'300px'
      });
      sr.reveal('.showcase-btn', {
        duration: 3000,
        delay: 2000,
        origin:'bottom'
      });


});

