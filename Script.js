$(document).ready(function() {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    // Function to check if an element is in the viewport
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
});