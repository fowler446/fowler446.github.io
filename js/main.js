const droneWrapper = document.querySelector(".drone-wrapper");
const sprinkles = document.querySelector(".sprinkles");
const crossSection = document.querySelector(".cross-section");
const crossSectionInner = document.querySelector(".cross-section .inner");

var bodyRect = sprinkles.getBoundingClientRect();
var elRect = document.querySelector(".sprinkle-1").getBoundingClientRect();
var elTop   = elRect.top - bodyRect.top;
var elLeft   = elRect.left - bodyRect.left;

droneWrapper.addEventListener("click", function(e) {
  bodyRect = sprinkles.getBoundingClientRect();
  var el = e.target;

  if ( el.classList.contains("sprinkle") ) {

    //get position of sprinkle
    elRect = el.getBoundingClientRect();
    elTop = elRect.top - bodyRect.top + 10;
    elLeft = elRect.left - bodyRect.left + 10;

    crossSection.style.setProperty('clip-path', 'circle(72px at ' + elLeft + 'px ' + elTop + 'px)');
    crossSectionInner.style.setProperty('clip-path', 'circle(68px at ' + elLeft + 'px ' + elTop + 'px)');

	} else {
    crossSection.style.setProperty('clip-path', 'circle(0px at ' + elLeft + 'px ' + elTop + 'px)');
    crossSectionInner.style.setProperty('clip-path', 'circle(0px at ' + elLeft + 'px ' + elTop + 'px)');
  }
});

