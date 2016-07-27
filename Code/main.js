var brightness = document.getElementById("titleImage");
var val = 200;
var rising = false;
setInterval(function, milliseconds)
while (true) {
    if (rising) {
        val += 1;
    } else {
        val -= 1;
    }
    if (val > 200) {
        rising = false;
    } else if (val < 20) {
        rising = true;
    }

}
brightness.style.webkitFilter = "brightness(" + val + "%)";
