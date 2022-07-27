$(document).ready(function(){

  // $(window).scroll(function(){
    
  //   let temp = $(window).scrollTop();
    
  //   if(temp > 0) {
  //     $('.header-bottom').addClass('header-bottom-fix');
  //     $('.header-top').addClass('header-top-close');
  //   }else{
  //     $('.header-bottom').removeClass('header-bottom-fix');
  //     $('.header-top').removeClass('header-top-close');
  //   }
  // });
  
  let gnbMoreBtn = $('.gnb-more-btn');
  let subMenu = $('.submenu');
  gnbMoreBtn.click(function(event){
    event.preventDefault();
    subMenu.slideToggle()();
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
  })
  
});

window.onload = function(){
  
}