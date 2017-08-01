$(function(){
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
      $('#link0').click(function() { $.scrollTo($('.slider'), 800); });
      $('#link1').click(function() { $.scrollTo($('#info'), 800); });
			$('#link2').click(function() { $.scrollTo($('#social'), 800); });
			$('#link3').click(function() { $.scrollTo($('#footer'), 800); });
			$('#link4').click(function() { $.scrollTo($('#cont'), 800); });
			$('#link5').click(function() { $.scrollTo($('#mail'), 800); });
    });
$('input[type="submit"]').on('click', function(){
  event.preventDefault()
})
    $('input').on('blur', function() {
		let input = $('#name');
		let name_length = input.val().length;
		if(name_length >= 3 && name_length <= 15){
			input.removeClass("invalid").addClass("valid");
		}
		else{
			input.removeClass("valid").addClass("invalid");
		}
  });
  $('#email').on('blur', function() {
		const input = $(this);
		let pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		let is_email = pattern.test(input.val());
		if(is_email){
			input.removeClass("invalid").addClass("valid");
		}
		else{
			input.removeClass("valid").addClass("invalid");
		}
});

// const next =$("#nextPicture");
// const prev =$("#prevPicture");
// const imgLi=$('.sli');
// let num = 0;
//
// imgLi.eq(0).addClass('visible');
// next.on('click', function(){
//   imgLi.eq(num).removeClass('visible');
//   num++;
//   if (num==imgLi.length-1){
//     num = 0;
//   }
//   imgLi.eq(num).addClass('visible');
// });
// prev.on('click', function(){
//   imgLi.eq(num).removeClass('visible');
//   num--;
//   if (num==-1){
//     num= imgLi.length-1;
//   }
//   imgLi.eq(num).addClass('visible');
// });
  for (let i=0; i<100; i++){
    $('#picOne').fadeIn(1500).delay(3500).fadeOut(1500);
    $('#picTwo').delay(5000).fadeIn(1500).delay(3500).fadeOut(1500);
    $('#picThree').delay(10000).fadeIn(1500).delay(3500).fadeOut(1500);
    $('#picFour').delay(15000).fadeIn(1500).delay(3500).fadeOut(1500);
    $('#picFive').delay(20000).fadeIn(1500).delay(3500).fadeOut(1500);
      }
});
