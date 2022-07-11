$(document).ready(function(){
  $('#fullpage').fullpage({
    //options here
    anchors: ['section01', 'section02', 'section03', 'section04', 'section05', 'section06', 'section07'],
    menu: '#myMenu',
    autoScrolling:true,
    scrollHorizontally: true,
    dragAndMove : true
  });

  
  $('.subTextBox p').hover(function(){
    const img = document.querySelector('.backImg');
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    if($(this).hasClass('sTBp01')){
      $('#content03 #inner').removeClass();
      $('#content03 #inner').addClass('p01');
      // img.src = "/image/missionBack.png";
    }
    else if($(this).hasClass('sTBp02')){
      $('#content03 #inner').removeClass();
      $('#content03 #inner').addClass('p02');
      // img.src = "/image/missionBack2.png";
    }
    else if($(this).hasClass('sTBp03')){
      $('#content03 #inner').removeClass();
      $('#content03 #inner').addClass('p03');
      // img.src = "/image/missionBack3.png";
    }
    else if($(this).hasClass('sTBp04')){
      $('#content03 #inner').removeClass();
      $('#content03 #inner').addClass('p04');
      // img.src = "/image/missionBack4.png";
    }
    else if($(this).hasClass('sTBp05')){
      $('#content03 #inner').removeClass();
      $('#content03 #inner').addClass('p05');
      // img.src = "/image/missionBack5.png";
    }else {

    }
  // },function(){
  //   $(this).removeClass('active');
  //   img.src="";
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

  // hamburger 
  $('.m_hamburger').on('click',function(){
    $('.header_inner nav').toggleClass('active');
    console.log('왜안댕')
  });

});