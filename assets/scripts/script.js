$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      document.querySelector(".navbar-nav").style.marginTop = "0";
      document.querySelector(".navbar-nav").style.paddingTop = "1rem";
    });
  });
