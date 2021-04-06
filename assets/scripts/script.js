 // TODO
 // Optimise code & remove DRY (Do not repeat yourself)

var fps = document.querySelector(".fps-container");
var rpg = document.querySelector(".rpg-container");
var mmorpg = document.querySelector(".mmorpg-container");

// Scroll to CTA
function scrollTo() {
  var elmnt = document.getElementById("cta");
  elmnt.scrollIntoView();
}


  // Toggle display for top rated cards
  function toggleFps() {
    var displaySetting = fps.style.display;
    if (displaySetting == 'none') {
      fps.style.display = 'block';
      rpg.style.display = 'none';
      mmorpg.style.display = 'none';
    }
    else {
      fps.style.display = 'none';
    }
  }

  function toggleRpg() {
    var displaySetting = rpg.style.display;
    if (displaySetting == 'none') {
      rpg.style.display = 'block';
      fps.style.display = 'none';
      mmorpg.style.display = 'none';
    }
    else {
      rpg.style.display = 'none';
    }
  }

  function toggleMmorpg() {
    var displaySetting = mmorpg.style.display;
    if (displaySetting == 'none') {
      mmorpg.style.display = 'block';
      fps.style.display = 'none';
      rpg.style.display = 'none';
    }
    else {
      mmorpg.style.display = 'none';
    }
  }


  function submitMsg() {
    document.querySelector(".success").innerHTML = "Thanks for getting in touch!";
  }

  
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      document.querySelector(".navbar-nav").style.marginTop = "0";
      document.querySelector(".navbar-nav").style.paddingTop = "1rem";
    });
    
  });





