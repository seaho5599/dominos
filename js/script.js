$(document).ready(function(){
  // 배너닫기
  $('.benner-close').click(function(){
    $('.domino-benner').hide();
  })
  // 배너사라지기
  $('.header-top-tip-box').delay(5000).fadeOut('slow');

  $(window).scroll(function(){
    
    let temp = $(window).scrollTop();
    
    if(temp > 0) {
      $('.header-bottom').addClass('header-bottom-fix');
      $('.header-top').addClass('header-top-close');
    }else{
      $('.header-bottom').removeClass('header-bottom-fix');
      $('.header-top').removeClass('header-top-close');
    }
  });
  
  let gnbMoreBtn = $('.gnb-more-btn');
  let subMenu = $('.submenu');
  gnbMoreBtn.click(function(event){
    event.preventDefault();
    $('html').animate({
      scrollTop: 0
    });
    subMenu.slideToggle();
  })
  subMenu.click(function(){
    subMenu.slideUp();
  })
});
$(document).ready(function(){
  let swVisual = new Swiper('.sw-visual', {
    loop : true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    navigation:{
      nextEl:".sw-visual-next",
      prevEl:".sw-visual-prev",
    },
    pagination:{
      el:".sw-visual-pg",
      type: "fraction"
    }
  })
  let swVisualPlay = $('.sw-visual-play');
  swVisualPlay.click(function(){
    let temp = $(this).hasClass('sw-visual-play-click');
    if(temp ==true){
      swVisual.autoplay.start();
      $(this).removeClass('sw-visual-play-click');
    }else{
      swVisual.autoplay.stop();
      $(this).addClass('sw-visual-play-click');
    }
  });
  let swBenefit = new Swiper('.sw-benefit',{
    slidesPerView: 3.5,
    spaceBetween: 6,
    navigation:{
      nextEl:".sw-benefit-next",
      prevEl:".sw-benefit-prev",
    },
    
  });
  let swNotice = new Swiper('.sw-notice', {
    slidesPerView : 'auto',
    spaceBetween: 30,
    loop : true,
    navigation:{
      nextEl:".sw-notice-next",
      prevEl:".sw-notice-prev",
    },
    speed:500
  })
});

window.onload = function(){
  
}