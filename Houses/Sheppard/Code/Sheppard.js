//document.getElementById("sheppardPortrait").playbackRate = 1.6;
$(document).ready(function() {
$(".secondBody").css("top", $(".mainBody").offset().top);
$(".secondBody").css("left", $(".mainBody").offset().left);
$(".secondBody").css("width", $(".mainBody").width());
$(".secondBody").css("height", $(".mainBody").height());
var randomRows = GetRandomInt(3,6);
var randomCol = GetRandomInt(3,6);
    for (var y = 0; y < randomRows; y++) {
        var randomHeight = GetRandomArbitrary(1, 4);
        var follow = "<div id=\'vertBox-" + y + "' class='innerBoxesCol' style='flex: " + randomHeight + " 0 auto'></div>";
        var follow2 = "<div id=\'vertBox2-" + y + "' class='innerBoxesCol' style='flex: " + randomHeight + " 0 auto'></div>";
        $(".mainBody").append(follow);
        $(".secondBody").append(follow2);
        for (var x = 0; x < randomCol; x++) {
            if (true) {
                var randomWidth = GetRandomArbitrary(1, 4);
                var xfollow = "<div id=\'box-" + y + "-" + x + "\' class='innerBoxesRow' style='flex: " + randomWidth + " 0 auto'></div>";
                $("#vertBox-" + y).append(xfollow);
                $("#vertBox2-" + y).append(xfollow);
            }
            // } else {
            //     var value = (Math.random() * ((100 / divide) + 20) + ((100 / divide) - 20))
            //     total += value;
            //     var follow = "";
            //     if (total > 100) {
            //         follow = "<div id=\'box-" + x + "-" + y + "\' class='innerBoxes' style='flex: 1 1 " + (100 - (total - value)) + "%'></div>";
            //         total = 0;
            //         //
            //         $(".mainBody").append(follow);
            //         break;
            //     } else {
            //         follow = "<div id=\'box-" + x + "-" + y + "\' class='innerBoxes' style='flex: 0 0 " + value + "%'></div>";
            //         $(".mainBody").append(follow);
            //     }


            //flo = (Math.random() >= 0.5);
        }
    }

    $(".innerBoxesRow").click(function() {
        $(this).addClass("magictime puffOut");
        var thisIs = this;
        setTimeout(function() {
            $(thisIs).addClass('loaded');
            $(thisIs).css("pointerEvents", "none");
          //  $(thisIs).css("position", "fixed");
        }, 1000);
    });
});
var clicked = false;

function GetRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function GetRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function SnellClick(e) {
    if (clicked == false) {
        clicked = true;
        $("#snellGlow").css("left", e.pageX);
        $("#snellGlow").css("top", e.pageY);
        $("#snellGlow").css("box-shadow", "0 0 10px 0 rgba(0, 0, 0, 0.9)");
        $("#snellGlow").animate({
            boxShadow: "0 0 9000000px 1850px rgba(255, 255, 255, 1)"
        }, {
            duration: 1500,
            easing: "linear"
        });
        $("#snellGlow").css("z-index", "10000");
        //  $(".Snell").css("z-index", "-1");
        setTimeout(function delayed() {
            GoToPageFromSheppard("Snell");
        }, 2000);
    }
}

function HillaryClick(e) {
    if (clicked == false) {
        clicked = true;
        $("#hillaryGlow").css("left", e.pageX);
        $("#hillaryGlow").css("top", e.pageY);
        $("#hillaryGlow").css("box-shadow", "0 0 10px 0 rgba(250, 255, 0, 0.9)");
        $("#hillaryGlow").animate({
            boxShadow: "0 0 9000000px 1850px rgba(255, 255, 255, 1)"
        }, {
            duration: 1500,
            easing: "linear",
            // done: GoToPage("Hillary")
        });
        $("#hillaryGlow").css("z-index", "10000");
        //  $(".Hillary").css("z-index", "-1");
        setTimeout(function delayed() {
            GoToPageFromSheppard("Hillary");
        }, 2000);
    }
}

function RutherfordClick(e) {
    if (clicked == false) {
        clicked = true;
        $("#rutherfordGlow").css("left", e.pageX);
        $("#rutherfordGlow").css("top", e.pageY);
        $("#rutherfordGlow").css("box-shadow", "0 0 10px 0 rgba(255, 0, 0, 0.9)");
        $("#rutherfordGlow").animate({
            boxShadow: "0 0 8000000px 3000px rgba(255, 255, 255, 1)"
        }, {
            duration: 1500,
            easing: "linear"
        });
        $("#rutherfordGlow").css("z-index", "1000");
        setTimeout(function delayed() {
            GoToPageFromSheppard("Rutherford");
        }, 2000);
    }
}

function TepueaClick(e) {
    if (clicked == false) {
        clicked = true;
        $("#tepueaGlow").css("left", e.pageX);
        $("#tepueaGlow").css("top", e.pageY);
        $("#tepueaGlow").css("box-shadow", "0 0 10px 0 rgba(0, 198, 26, 0.9)");
        $("#tepueaGlow").animate({
            boxShadow: "0 0 8000000px 3000px rgba(255, 255, 255, 1)"
        }, {
            duration: 1500,
            easing: "linear"
        });
        $("#tepueaGlow").css("z-index", "1000");
        setTimeout(function delayed() {
            GoToPageFromSheppard("Tepuea");
        }, 2000);
    }
}

function GoToPageFromSheppard(page) {
    window.location.href = "../" + page + "/index.html";
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function FadeOut() {
    $("#loaderWrapper").addClass("magictime puffOut");
    //ResizeCovers();
    setTimeout(function() {
        $("#loaderWrapper").addClass('loaded');
    }, 1000);
}
