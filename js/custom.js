(function($) {

jQuery(document).ready(function() {

  $('.po').popover({});

  $('#search').keypress(function(e) {
    if(e.which == 13) {
        var val = $('#search').val();
        if(val == 'gallery') {
          $('section').hide();
          $('#sec4').show();
        }
        else if(val == 'diet') {
          $('section').hide();
          $('#sec2').show();
        }
        else if(val == 'mating') {
          $('section').hide();
          $('#sec3').show();
        }
                else if(val == 'anatomy') {
          $('section').hide();
          $('#sec5').show();
        }
                        else if(val == 'email') {
          $('section').hide();
          $('#sec60').show();
        }
        else {
          $('section').show();
          $("html, body").animate({ scrollTop: 0 }, "fast");
        }
    }
  });

  //lightbox
  $(document).ready(function(){
    $('a').nivoLightbox();
  });
	//this code for the croll animation
  $(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


    //this code is for header
   jQuery(window).scroll(function() {
      var windowScrollPosTop = jQuery(window).scrollTop();

      if(windowScrollPosTop >= 200) {
        jQuery(".logo").css({"margin-top": "20px", "margin-bottom": "20px"});
        jQuery(".navbar-default").css({"margin-top": "7px", "margin-bottom": "0"});
      }
      else{
        jQuery(".logo").css({"margin-top": "8px", "border-bottom": "0"});
         jQuery(".navbar-default").css({"margin-top": "25px", "margin-bottom": "15px"});

      }
   });

});

}) (jQuery);