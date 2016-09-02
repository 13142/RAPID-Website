//document.getElementById("sheppardPortrait").playbackRate = 1.6;
$(document).ready(function() {
    Resize();
    var allWords;

    $.ajax({
        url: "Media/SheppardWords.txt",
        dataType: "text",
        success: function(data) {
            allWords = (data).split("\n");

            LoadBoxes();

            Resize();
			setTimeout(Resize, 150);
			setTimeout(Resize, 300);
			
            $(".innerBoxesRow").click(function() {
                $(this).addClass("magictime puffOut");
                var thisIs = this;
                setTimeout(function() {
                    $(thisIs).addClass('loaded');
                    $(thisIs).css("pointerEvents", "none");
                    //  $(thisIs).css("position", "fixed");
                }, 1000);
            });
        }
    });

    function LoadBoxes() {
        var randomRows = GetRandomInt(4, 6);
        var randomCol = GetRandomInt(4, 6);
        var widthy = RandomSplits(100, randomRows, 1, 6);
        console.log(widthy);
        for (var y = 0; y < randomRows; y++) {
            var heightx = RandomSplits(100, randomCol, 1, 6);
            console.log(heightx);
            var randomHeight = GetRandomArbitrary(1, 4);
            //var follow = "<div id=\'vertBox-" + y + "' class='innerBoxesCol' style='flex: " + randomHeight + " 0 auto'></div>";
            //var follow2 = "<div id=\'vertBox2-" + y + "' class='innerBoxesCol' style='flex: " + randomHeight + " 0 auto'></div>";
            var wInPixels = $(".mainBody").width() * (widthy[y] / 100)

            var follow = "<div id=\'vertBox-" + y + "' class='innerBoxesCol' style='flex: 0 0 auto; width: " + wInPixels + "px'></div>";
            var follow2 = "<div id=\'vertBox2-" + y + "' class='innerBoxesCol' style='flex: 0 0 auto; width: " + wInPixels + "px'></div>";
            $(".mainBody").append(follow);
            $(".secondBody").append(follow2);
            for (var x = 0; x < randomCol; x++) {
                var hInPixels = $(".mainBody").height() * (heightx[x] / 100);
                //var randomWidth = GetRandomArbitrary(1, 4);
                var randomIndex = GetRandomInt(0, allWords.length);
                var innerText = allWords[randomIndex];
                allWords.splice(randomIndex, 1);
                var xfollow = "<div id=\'box-" + y + "-" + x + "\' class='innerBoxesRow' style='height: " + hInPixels + "px;'></div>";

                //var fontSize = ((hInPixels * wInPixels) / 2000) - innerText.length / 2;  //randomWidth;
                //console.log(fontSize);
				var alignment;
				var alignValue = Math.random()
				if (alignValue < 0.33){
					alignment = "left";
				}else if (alignValue > 0.66){
					alignment = "right";
				}else{
				alignment = "center";
				}
                var xfollow2 = "<div id=\'box-" + y + "-" + x + "t\' class='innerBoxesRow' style='height: " + hInPixels + "px; flex: 0 0 auto; text-align: " + alignment +"font-size: 10pt'><span>" + innerText + "</span></div>";

                $("#vertBox-" + y).append(xfollow);
                $("#vertBox2-" + y).append(xfollow2);
            }
        }
    }

    var resizeTimer;
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(Resize, 100);
    });
});

function RandomSplits(total, amountOfValues, min, max) {
    // while (true) {
    //     var a = [];
    //     var i = 0;
    //     var trueTotal = total;
    //     while (trueTotal > 0) {
    //         if (i == amountOfValues - 1) {
    //             a.push(trueTotal);
    //             a = shuffle(a);
    //             return a;
    //         }
    //         var s = Math.random() * trueTotal / max + min;
    //         // while (s < 10 || s > 50) {
    //         //   s = Math.random() * total;
    //         // }
    //         a.push(s);
    //         trueTotal -= s;
    //         i++;
    //     }
    // }
    var trueTotal = 0;
    var a = [];
    for (var i = 0; i < amountOfValues; i++) {
      var currentPercent = GetRandomArbitrary(min, max);
      trueTotal += currentPercent;
      a.push(currentPercent);
    }
    for (var i = 0; i < a.length; i++) {
      a[i] = a[i] / trueTotal;
      a[i] = a[i] * total;
    }
    //a = shuffle(a);
    return a;
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function Resize() {
    $(".secondBody").css("top", $(".mainBody").offset().top);
    $(".secondBody").css("left", $(".mainBody").offset().left);
    $(".secondBody").css("width", $(".mainBody").width());
    $(".secondBody").css("height", $(".mainBody").height());

    $(".secondBody").find("*").textfill({minFontPixels: 5, maxFontPixels:900});
}

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
