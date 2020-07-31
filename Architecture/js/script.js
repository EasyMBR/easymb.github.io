"use strict";

var $header = $(".scrolling-header");
var scroll = 300;
var active = "scrolling-header-visible";
$(window).scroll(function () {
  if ($(window).scrollTop() > scroll) {
    $header.addClass(active);
    
  } else {
    $header.removeClass(active);
  }
});


$(".up-button a").on("click", function () {
  var get_id = $(this).attr("data-item");
  var target = $("#" + get_id).offset().top;

  $("html, body").animate(
    {
      scrollTop: target,
    },
    800
  );
});
