window.onpageshow = function(event)
{
    if (event.persisted)
    {
        window.location.reload()
    }
};
var brightness = document.getElementById("titleImage");
var val = 200;
var rising = false;
window.setInterval(pulsingTitle, 10);
$(document).ready(function()
{
    $("#loader").hide().delay(400).fadeIn(1500);
    setTimeout(function () {
      FadeOut();
    }, 5000);
});

function FadeOut()
{
    $("#loaderWrapper").addClass("magictime puffOut");
    //ResizeCovers();
    setTimeout(function()
    {
        $("#loaderWrapper").addClass('loaded');
    }, 1000);
}

function pulsingTitle()
{
    if (rising)
    {
        val += 0.25;
    }
    else
    {
        val -= 0.25;
    }
    if (val > 100)
    {
        rising = false;
    }
    else if (val < 0)
    {
        rising = true;
    }
    brightness.style.webkitFilter =
        "brightness(" + (-20 * Math.cos((Math.PI / 50) * val) + 20 + 85) + "%)";
    brightness.style.filter =
        "brightness(" + (-20 * Math.cos((Math.PI / 50) * val) + 20 + 85) + "%)";
}