//head room


$(document).ready(function(){
          
    // Init Modal
    $('.modal').modal();

    // MAIN SLIDESHOW 
    /*global $,jQuery,console,window*/
    (function ($) {
    "use strict";
    var slideshow = (function () {
        var counter = 0,
            x,
            y,
            slides =  $("#slideshow .slide"),
            slidesLen = slides.length - 1;
        for (x = 0, y = 9999; x < slides.length; x += 1, y -= 1) {
            $(slides[x]).css("z-index", y);
        }
        return {
            startslideshow: function () {
                window.setInterval(function () {
                    if (counter === 0) {
                        slides.eq(counter).fadeOut();
                        counter += 1;
                    } else if (counter === slidesLen) {
                        counter = 0;
                        slides.eq(counter).fadeIn(function () {
                            slides.fadeIn();
                        });
                    } else {
                        slides.eq(counter).fadeOut();
                        counter += 1;
                    }
                }, 7000);
            }
        };
    }());
    slideshow.startslideshow();
    }(jQuery));
    
    });
