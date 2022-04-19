$(function () {
  'use strict';


  // WoW Js
  var wow = new WOW(
    {
      offset: 2,
      mobile: false
    }
  )
  wow.init();

});

function mainmenu() {
  jQuery(".navdropdon").hover(function () {
//alert("hai-2");
      jQuery(this).find('.dropdon').slideDown("fast");
  }, function () {
      jQuery(this).find('.dropdon').slideUp("fast");
  });
}
function megamenu() {
  jQuery(".navMega").hover(function () {
//alert("hai-2");
      jQuery(this).find('.megamenu').slideDown("fast");
  }, function () {
      jQuery(this).find('.megamenu').slideUp("fast");
  });
}


$(document).ready(function () {
  mainmenu();
  megamenu();
}); 


