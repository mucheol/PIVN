$(document).ready(function(){
  $('#fullpage').fullpage({
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    dragAndMove : true
  });

  
  $('.subTextBox p').hover(function(){
    const img = document.querySelector('.backImg');
    $(this).addClass('active');
    if($(this).hasClass('sTBp01')){
      $('#content03 #inner').removeClass();
      $('#content03 #inner').addClass('p01');
      img.src = "/image/missionBack.png";
    }
    else if($(this).hasClass('sTBp02')){
      $('#content03 #inner').removeClass();
      $('#content03 #inner').addClass('p02');
      img.src = "/image/missionBack2.png";
    }
    else if($(this).hasClass('sTBp03')){
      $('#content03 #inner').removeClass();
      $('#content03 #inner').addClass('p03');
      img.src = "/image/missionBack3.png";
    }
    else if($(this).hasClass('sTBp04')){
      $('#content03 #inner').removeClass();
      $('#content03 #inner').addClass('p04');
      img.src = "/image/missionBack4.png";
    }
    else if($(this).hasClass('sTBp05')){
      $('#content03 #inner').removeClass();
      $('#content03 #inner').addClass('p05');
      img.src = "/image/missionBack5.png";
    }else {
      $('#content03 #inner').removeClass();
      img.src="";
    }
  },function(){
    $(this).removeClass('active');
  });


  // slider
  $('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".slick-prev").html("");
  $(".slick-next").html("");
});