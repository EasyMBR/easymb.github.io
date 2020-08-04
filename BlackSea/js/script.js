"use strict";

var header = $(".header");
var scrollPrev = 0;

$(window).scroll(function () {
  var scrolled = $(window).scrollTop();

  if (scrolled > 100 && scrolled > scrollPrev) {
    header.addClass("header--out");
  } else {
    header.removeClass("header--out");
  }

  scrollPrev = scrolled;
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
