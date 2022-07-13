// Loading Animation
const loader = $('.loadingPage');
const html = $('html');

html.css({'overflow' : 'hidden'}); //로딩 중 스크롤 방지

$(window).on('load', ()=>{
     setTimeout(() => { //  <-* 로딩속도 구현
    loader.fadeOut(300);  
    html.css({'overflow' : 'auto'}); //스크롤 방지 해제
  }, 2000);  //  <-* 로딩속도 구현
})

$(document).ready(function(){
  // new fullpage('#fullpage', {
    
  // });
  $('#fullpage').fullpage({
    //options here
    anchors: ['section01', 'section02', 'section03', 'section04', 'section05', 'section06', 'section07'],
    menu: '#myMenu',
    licenseKey: 'SK207-O5RWH-I32WH-1J2LI-UFKOO',
    autoScrolling:true,
    scrollHorizontally: true,
    dragAndMove : true
  });

  $('#content03').hover(function(){
  $('.subTextBox p').hover(function(){
    const img = document.querySelector('.backImg');
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    if($(this).hasClass('sTBp01')){
      $('#content03 #inner').removeClass();
      $('#content03 #inner').addClass('p01');
    }
    else if($(this).hasClass('sTBp02')){
      $('#content03 #inner').removeClass();
      $('#content03 #inner').addClass('p02');
    }
    else if($(this).hasClass('sTBp03')){
      $('#content03 #inner').removeClass();
      $('#content03 #inner').addClass('p03');
    }
    else if($(this).hasClass('sTBp04')){
      $('#content03 #inner').removeClass();
      $('#content03 #inner').addClass('p04');
    }
    else if($(this).hasClass('sTBp05')){
      $('#content03 #inner').removeClass();
      $('#content03 #inner').addClass('p05');
    }else {
      $('#content03 #inner').removeClass();
      
    }
  });
},function(){
  $('.subTextBox p').siblings().removeClass('active');
  $('#content03 #inner').removeClass();
});


  // slider
  $('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
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
    $(this).toggleClass('active');
  });
  $('#myMenu').on('click',function(){
    $('.header_inner nav').toggleClass('active');
    $('.m_hamburger').toggleClass('active');
  });

});