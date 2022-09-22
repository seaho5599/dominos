$(document).ready(function () {
    // 안내창 기능
  // 추가기능:  스크롤바 없에기
  $('html').css('overflow', 'hiden');
  let modalWrap = $('.modal-wrap');
  let modalClose = $('.modal-close');
  modalClose.click(function () {
    modalWrap.stop().fadeOut(100);
    // 추가기능:  스크롤바 살리기
    $('html').css('overflow', 'auto');
  });
  let modalMain = $('.modal-main');
  // 내용배경 클릭
  modalMain.click(function (event) {
    event.stopPropagation();
  });
  // 전체 배경 클릭
  modalWrap.click(function () {
    modalWrap.stop().fadeOut(100);
    $('html').css('overflow', 'auto');
  });
  // gotop
  let gotopBox = $('.gotop-box');
  $(window).scroll(function(){
    let temp = $(window).scrollTop();
    let wW = window.innerWidth;
    if(temp >= 96){
      if(wW < 800){
        gotopBox.css("display","block");
        gotopBox.css("bottom","100px");
      }else{
        gotopBox.css("display","none");
      }
    }else if(temp < 96){
      gotopBox.css("bottom","0");
    }
    gotopBox.click(function(){
      $('html').stop().animate({
        scrollTop : 0
      }, 1000)
    })
  })
  // 배너닫기
  $('.benner-close').click(function () {
    $('.domino-benner').hide();
  })
  // 배너사라지기
  $('.header-top-tip-box').delay(5000).fadeOut('slow');
  // 모바일메뉴
  let mbMoreBtn = $('.mb-more-btn');
  let mbMenu = $('.mb-menu');
  let mbClose = $('.mb-close');
  mbMoreBtn.click((e)=>{
    e.preventDefault();
    mbMenu.addClass('mb-menu-active');
  })
  mbClose.click(()=>{
    mbMenu.removeClass('mb-menu-active');
  })
  $(window).resize(()=>{
    let wW = window.innerWidth;
    if(wW > 800){
      mbMenu.hide();
    }else{
      mbMenu.removeClass('mb-menu-active');
      mbMenu.show();
    }
  })

  let header = $('.header');
  let headerTop = $('.header-top')
  $(window).scroll(function () {
    let temp = $(window).scrollTop();
    let wW = window.innerWidth;

    if (temp >= 95) {

      if (wW <= 800) {
        $('.header-fix').addClass('header-fix-none')
      } else {
        $('.header-fix').removeClass('header-fix-none');
      }

    } else if (temp > 0) {

      header.addClass('header-fix');
      headerTop.addClass('header-top-close');
      $('.header-fix').removeClass('header-fix-none');

    } else {
      header.removeClass('header-fix');
      headerTop.removeClass('header-top-close');
    }


  });

  let gnbMoreBtn = $('.gnb-more-btn');
  let subMenu = $('.submenu');
  gnbMoreBtn.click(function (event) {
    event.preventDefault();
    $('html').animate({
      scrollTop: 0
    });
    subMenu.slideToggle();
  })
  subMenu.click(function () {
    subMenu.slideUp();
  })
});
$(document).ready(function () {
  let swVisual = new Swiper('.sw-visual', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
    pagination: {
      el: ".sw-visual-pg",
      type: "fraction"
    }
  })
  let swVisualPlay = $('.sw-visual-play');
  swVisualPlay.click(function () {
    let temp = $(this).hasClass('sw-visual-play-click');
    if (temp == true) {
      swVisual.autoplay.start();
      $(this).removeClass('sw-visual-play-click');
    } else {
      swVisual.autoplay.stop();
      $(this).addClass('sw-visual-play-click');
    }
  });
  let swBenefit = new Swiper('.sw-benefit', {
    slidesPerView: 3.5,
    spaceBetween: 6,
    navigation: {
      nextEl: ".sw-benefit-next",
      prevEl: ".sw-benefit-prev",
    },

  });
  let swNotice = new Swiper('.sw-notice', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".sw-notice-next",
      prevEl: ".sw-notice-prev",
    },
    speed: 500
  })

  let mbFooterCenter = $('.mb-footer-center');
  let mbFooterCenterBox = $('.mb-footer-centerbox');
  mbFooterCenter.click((e)=>{
    e.preventDefault();
    mbFooterCenterBox.slideToggle();
  })
});

window.onload = function () {

}