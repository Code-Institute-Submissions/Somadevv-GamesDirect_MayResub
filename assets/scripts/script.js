 // TODO
 // Optimise code & remove DRY (Do not repeat yourself)

var fps = document.querySelector(".fps-container");
var rpg = document.querySelector(".rpg-container");
var mmorpg = document.querySelector(".mmorpg-container");
var fpsImg = document.querySelector('.fps-image');
var rpgImg = document.querySelector('.rpg-image');
var mmorpgImg = document.querySelector('.mmorpg-image');

var fpsElement = document.querySelector(".fpsTitle");
var rpgElement = document.querySelector(".rpgTitle");
var mmorpgElement = document.querySelector(".mmorpgTitle");


// var fpsContainer = document.querySelector('.fps-container');
// var rpgContainer = document.querySelector('.rpg-container');
// var mmorpgContainer = document.querySelector('.mmorpg-container');





// Scroll to CTA
function scrollTo() {
  var elmnt = document.getElementById("cta");

}

  function toggleFps() {
    var displaySetting = fps.style.display;
    // Toggles the FPS genre container class
    if (displaySetting == 'none') {
      fpsElement.classList.add("toggleColor");
      rpgElement.classList.remove("toggleColor");
      mmorpgElement.classList.remove("toggleColor");
      // fpsImg.style.transform = 'scale(3.1);'
      fpsImg.style.filter = 'grayscale(0%)';
      rpgImg.style.filter = 'grayscale(100%)';
      mmorpgImg.style.filter = 'grayscale(100%)';
      fps.style.display = 'block';
      rpg.style.display = 'none';
      mmorpg.style.display = 'none';
    }
    else {
      fpsElement.classList.remove("toggleColor");
      fpsImg.style.filter = 'grayscale(100%)';
      rpgImg.style.opacity = '1';
      fps.style.display = 'none';
 
    } 
  }
 // Toggles the RPG genre container class
  function toggleRpg() {
    var element = document.querySelector(".rpgTitle");
    var displaySetting = rpg.style.display;
    if (displaySetting == 'none') {
      rpgElement.classList.add("toggleColor");
      fpsElement.classList.remove("toggleColor");
      mmorpgElement.classList.remove("toggleColor");
      rpgImg.style.filter = 'grayscale(0%)';
      fpsImg.style.filter = 'grayscale(100%)';
      mmorpgImg.style.filter = 'grayscale(100%)';
     rpg.style.display = 'block';
      fps.style.display = 'none';
      mmorpg.style.display = 'none';
    }
    else {
      element.classList.remove("toggleColor");
      rpg.style.display = 'none';
      rpgImg.style.filter = 'grayscale(100%)';
     
    }
  }
 // Toggles the MMORPG genre container class
  function toggleMmorpg() {
    var element = document.querySelector(".mmorpgTitle");
    var displaySetting = mmorpg.style.display;
    if (displaySetting == 'none') {
      mmorpgElement.classList.add("toggleColor");
      rpgElement.classList.remove("toggleColor");
      fpsElement.classList.remove("toggleColor");
      mmorpgImg.style.filter = 'grayscale(0%)';
      fpsImg.style.filter = 'grayscale(100%)';
      rpgImg.style.filter = 'grayscale(100%)';
      mmorpg.style.display = 'block';
      fps.style.display = 'none';
      rpg.style.display = 'none';
    }
    else {
      element.classList.remove("toggleColor");
      mmorpgImg.style.filter = 'grayscale(100%)';
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
      // document.querySelector(".navbar-nav").style.marginTop = "0";
      // document.querySelector(".navbar-nav").style.paddingTop = "1rem";
    });
    
  });





