var brightness = document.getElementById("titleImage");
var val = 200;
var rising = false;
window.setInterval(pulsingTitle, 20);

function pulsingTitle() {
  if (rising) {
      val += 0.3333;
  } else {
      val -= 0.3333;
  }
  if (val > 100) {
      rising = false;
  } else if (val < 0) {
      rising = true;
  }
  brightness.style.webkitFilter = "brightness(" + (-45 * Math.cos((Math.PI / 50) * val) + 45 + 60) + "%)";
  console.log((-45 * Math.cos((Math.pi / 50) * val) + 45));

}
