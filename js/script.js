$(document).ready(function () {
  // 배너닫기
  $('.benner-close').click(function () {
    $('.domino-benner').hide();
  })
  // 배너사라지기
  $('.header-top-tip-box').delay(5000).fadeOut('slow');
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

  // $(window).resize(function(){
  //   let wW = window.innerWidth;
  //   if(wW > 800){
  //     swNotice;
  //   }else{
  //     swNotice.destroy();

  //   }
  // })
});

window.onload = function () {

}