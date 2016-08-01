var brightness = document.getElementById("titleImage");
var val = 200;
var rising = false;
window.setInterval(pulsingTitle, 10);

function pulsingTitle() {
    if (rising) {
        val += 0.25;
    } else {
        val -= 0.25;
    }
    if (val > 100) {
        rising = false;
    } else if (val < 0) {
        rising = true;
    }
    brightness.style.webkitFilter =
        "brightness(" + (-20 * Math.cos((Math.PI / 50) * val) + 20 + 85) + "%)";

}
