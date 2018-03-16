const droneWrapper = document.querySelector(".drone-wrapper");
const sprinkles = document.querySelector(".sprinkles");
const crossSection = document.querySelector(".cross-section");
const crossSectionInner = document.querySelector(".cross-section .inner");
const infoConnector = document.querySelector(".info-connector");
const droneInfo = document.querySelector(".drone-info");

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

    //animate inspector circle
    crossSection.style.setProperty('clip-path', 'circle(72px at ' + elLeft + 'px ' + elTop + 'px)');
    crossSectionInner.style.setProperty('clip-path', 'circle(68px at ' + elLeft + 'px ' + elTop + 'px)');

    //show and set top of info connector
    infoConnector.style.top = elTop + 'px';
    infoConnector.style.left = elLeft + 'px';
    infoConnector.classList.add('active');

    //show drone info
    droneInfo.classList.add('active');

	} else {
    //close inspector circle
    crossSection.style.setProperty('clip-path', 'circle(0px at ' + elLeft + 'px ' + elTop + 'px)');
    crossSectionInner.style.setProperty('clip-path', 'circle(0px at ' + elLeft + 'px ' + elTop + 'px)');

    //hide info connector
    infoConnector.classList.remove('active');

    //hide drone info
    droneInfo.classList.remove('active');
  }
});

