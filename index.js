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
  $('#fullpage').fullpage({
    //options here
    anchors: ['section01', 'section02', 'section03', 'section04', 'section05', 'section06', 'section07'],
    menu: '#myMenu',
    licenseKey: 'SK207-O5RWH-I32WH-1J2LI-UFKOO',
    autoScrolling:true,
    scrollHorizontally: true,
    dragAndMove : true
  });

  $(".langMenu .title").click(function() {
    $(this).next(".langMenu .item").stop().slideToggle(300);
   $(this).toggleClass('on').siblings().removeClass('on');
   $(this).next(".langMenu .item").siblings(".langMenu .item").slideUp(300); // 1개씩 펼치기
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
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
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

  // 모바일 RoadMap
  $('#y2022').on('click',function(){
    $('.m_inner .loadBox03').css({'display':'none'})
    $('.m_inner .loadBox02').css({'display':'block'})
    $(this).css({'color':'#b71b1b'})
    $('#y2023').css({'color':'#fff'})
  })
  $('#y2023').on('click',function(){
    $('.m_inner .loadBox02').css({'display':'none'})
    $('.m_inner .loadBox03').css({'display':'block'})
    $(this).css({'color':'#b71b1b'})
    $('#y2022').css({'color':'#fff'})
  })

  // PDF
  $('.pdfBtn').on('click',function(e){
    $(".iframeBox").css({'display':'flex'})
  })
  $('.pdfE').on('click',function(e){
    $(".iframeBox .pdfEng").css({'display':'block'})
  })
  $('.pdfK').on('click',function(e){
    $(".iframeBox .pdfKor").css({'display':'block'})
  })
  $('.iframeBox button').on('click',function(e){
    $(".iframeBox").css({'display':'none'})
    $(".iframeBox iframe").css({'display':'none'})
  })
  
});