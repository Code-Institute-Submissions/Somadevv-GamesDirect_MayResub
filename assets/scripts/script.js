$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      document.querySelector(".navbar-nav").style.marginTop = "0";
      document.querySelector(".navbar-nav").style.paddingTop = "1rem";
      
    });
    
  });



  function toggleFps() {
    var x = document.querySelector(".fps-container");
    var displaySetting = x.style.display;
    if (displaySetting == 'none') {
      x.style.display = 'block';
    }
    else {
      x.style.display = 'none';

    }
  }
  function toggleRpg() {
    var x = document.querySelector(".rpg-container");
    var displaySetting = x.style.display;
    if (displaySetting == 'none') {
      x.style.display = 'block';
    }
    else {
      x.style.display = 'none';

    }
  }

  function toggleMmorpg() {
    var x = document.querySelector(".mmorpg-container");
    var displaySetting = x.style.display;
    if (displaySetting == 'none') {
      x.style.display = 'block';
    }
    else {
      x.style.display = 'none';

    }
  }


