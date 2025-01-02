$(document).ready(function() {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    $(window).scroll(function() {
        if ($(window).scrollTop()) {
    
            
            $(".ix-nav").addClass("ix-fixed");
            $(".ix-nav").removeClass("ix-moved");
        } else {
            $(".ix-nav").addClass("ix-moved");
            $(".ix-nav").removeClass("ix-fixed");
        }
    });

    jQuery(function ($) {
        $('a.sywh-open-services').click(function () {
          const services = $('.sywh-services');
          const toggleIcon = $('a.sywh-open-services i');
          const links = services.find('a');
          
          if (services.hasClass('active')) {
            services.removeClass('active');
            toggleIcon.filter('.fa-times').hide();
            toggleIcon.filter('.fa-comments').show();
            $('a.sywh-open-services').removeClass('data-tooltip-hide');
            
            links.each(function (index) {
              $(this).delay(index * 100).fadeOut();
            });
          } else {
            services.addClass('active');
            toggleIcon.filter('.fa-comments').hide();
            toggleIcon.filter('.fa-times').show();
            $('a.sywh-open-services').addClass('data-tooltip-hide');
            
            $(links.get().reverse()).each(function (index) {
              $(this).delay(index * 100).fadeIn();
            });
          }
        });
      });
      
});