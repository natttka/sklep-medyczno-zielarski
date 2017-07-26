$(function(){
  console.log('dzialam');
$('#info').on('mouseover', function(){
    $(this).addClass("mouse_over");
  });
$('#info').on('mouseleave', function(){
      $(this).removeClass("mouse_over");
    });
$('#social').on('mouseover', function(){
        $(this).addClass("mouse_over");
      });
$('#social').on('mouseleave', function(){
          $(this).removeClass("mouse_over");
        });
$('#cont').on('mouseover', function(){
            $(this).addClass("mouse_over");
          });
$('#cont').on('mouseleave', function(){
              $(this).removeClass("mouse_over");
            });
$('#mail').on('mouseover', function(){
                $(this).addClass("mouse_over");
              });
$('#mail').on('mouseleave', function(){
                  $(this).removeClass("mouse_over");
                });

    // $('footer').hide();
    // $('.directions').on('click', function(){
    //     $('footer').slideDown("slow");
    //   });
    $('img').hide();
    $( "img" ).fadeIn(4000);

    const nav = $('nav').offset().top;
    const stickyNav = function(){
    let scrolly = $(window).scrollTop();

    if (scrolly > nav) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
    };

    stickyNav();

    $(window).scroll(function() {
      stickyNav();
    });
    jQuery(function($)
		{
			$.scrollTo(0);
      $('#link1').click(function() { $.scrollTo($('#info'), 800); });
			$('#link2').click(function() { $.scrollTo($('#social'), 800); });
			$('#link3').click(function() { $.scrollTo($('#footer'), 800); });
			$('#link4').click(function() { $.scrollTo($('#cont'), 800); });
			$('#link5').click(function() { $.scrollTo($('#mail'), 800); });
    });
});
