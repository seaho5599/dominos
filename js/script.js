$(document).ready(function(){
  let gnbMoreBtn = $('.gnb-more-btn');
  let subMenu = $('.submenu');
  gnbMoreBtn.click(function(event){
    event.preventDefault();
    subMenu.show();
  })
});



window.onload = function(){
  
}