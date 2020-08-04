"use strict";

var $header = $(".scrolling-header");
var $burger = $(".burger-nav");

var scroll = 300;

var active = "scrolling-header--visible";
$(window).scroll(function () {
  if ($(window).scrollTop() > scroll) {
    $header.addClass(active);
    $burger.addClass("burger--scrolled");
  } else {
    $header.removeClass(active);
    $burger.removeClass("burger--scrolled");
  }
});

$('input[type="checkbox"]').click(function (event) {
  if ($('input[type="checkbox"]').is(":checked")) {
    $("body").addClass("no-scroll");
  } else {
    $("body").removeClass("no-scroll");
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
