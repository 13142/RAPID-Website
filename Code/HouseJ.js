window.onpageshow = function(event)
{
    if (event.persisted)
    {
        window.location.reload()
    }
};
$(document).ready(function()
{
    $("#loader").hide().delay(400).fadeIn(1500);
    //Manual loading screen to let browser load,cache,and sort it self out (reduces framerate lag in animations)
    setTimeout(function () {
      FadeOut();
    }, 6000);
    var allWords;
    var allWordsBackup;
    var House = $("#HouseName").text().trim();
    var houseWords = new Image();
    var ready = false;
    houseWords.onload = function()
    {
        ready = true;
    }
    houseWords.src = "./Media/" + House + "Words.png";
    $.ajax(
    {
        url: "Media/" + House + "Text.txt",
        dataType: "text",
        cache: false,
        success: function(data)
        {
            var NewData = data.toUpperCase();
            allWords = (NewData).split("\n");
            allWordsBackup = allWords.slice();
            setTimeout(Prelude, 0);
            setTimeout(Resize, 300);
        },
        error: function(er)
        {
            console.log(er);
        }
    });

    function Prelude()
    {
        if (ready)
        {
            LoadBoxes();
        }
        else
        {
            setTimeout(Prelude, 100);
        }
    }

    function LoadBoxes()
    {
        var randomRows = GetRandomInt(4, 6);
        var randomCol = GetRandomInt(4, 6);
        var widthy = RandomSplits(100, randomRows, 1, 6);
        var done = [
            false,
            false
        ];
        for (var y = 0; y < randomRows; y++)
        {
            var heightx = RandomSplits(100, randomCol, 1, 6);
            var randomHeight = GetRandomArbitrary(1, 4);
            var wInPixels = $(".mainBody").width() * (widthy[y] / 100)

            var follow = "<div id=\'vertBox-" + y + "' class='innerBoxesCol' style='flex: 0 0 auto; width: " + wInPixels + "px'></div>";
            var follow2 = "<div id=\'vertBox2-" + y + "' class='innerBoxesCol' style='flex: 0 0 auto; width: " + wInPixels + "px'></div>";
            $(".mainBody").append(follow);
            $(".secondBody").append(follow2);
            for (var x = 0; x < randomCol; x++)
            {
                var hInPixels = $(".mainBody").height() * (heightx[x] / 100);
                var xfollow = "<div id=\'box-" + y + "-" + x + "\' class='innerBoxesRow' style='height: " + hInPixels + "px;'></div>";

                var alignment;
                var alignValue = Math.random()
                if (alignValue < 0.33)
                {
                    alignment = "left";
                }
                else if (alignValue > 0.66)
                {
                    alignment = "right";
                }
                else
                {
                    alignment = "center";
                }

                var xfollow2;

                if (AroundPointRatio(wInPixels, hInPixels, 240, 180, 0.2) && !done[0])
                {
                    xfollow2 = "<div id=\'box-" + y + "-" + x + "t\' class='innerBoxesRow' style='height: " + hInPixels + "px; flex: 0 0 auto; text-align: " + alignment + "; font-size: 10pt'><video id='" + House + "Portrait' width='" + wInPixels + "' height='" + hInPixels + "' autoplay loop muted><source src='Media/" + House + ".mp4' type='video/mp4'></video></div>";
                    done[0] = true;
                }
                else if (AroundPointRatio(wInPixels, hInPixels, houseWords.width, houseWords.height, 0.2) && !done[1])
                {
                    xfollow2 = "<div id=\'box-" + y + "-" + x + "t\' class='innerBoxesRow' style='height: " + hInPixels + "px; flex: 0 0 auto; text-align: " + alignment + "; font-size: 10pt'> <img src='Media/" + House + "Words.png' alt='Respect' height=" + hInPixels + " width=" + wInPixels + "> </div>";
                    done[1] = true;
                }
                else
                {
                    if (allWords.length == 0)
                    {
                        allWords = allWordsBackup.slice();
                    }
                    var randomIndex = GetRandomInt(0, allWords.length);
                    var innerText = allWords[randomIndex];
                    allWords.splice(randomIndex, 1);
                    xfollow2 = "<div id=\'box-" + y + "-" + x + "t\' class='innerBoxesRow' style='height: " + hInPixels + "px; flex: 0 0 auto; text-align: " + alignment + "; font-size: 10pt'><span>" + innerText + "</span></div>";
                }

                $("#vertBox-" + y).append(xfollow);
                $("#vertBox2-" + y).append(xfollow2);
            }
        }

        if (House == "Sheppard")
        {
            $("#" + House + "Portrait").playbackRate = 1.6;
        }
        else
        {
            $("#" + House + "Portrait").playbackRate = 1;
        }

        $(".innerBoxesRow").click(function()
        {
            $(this).addClass("magictime puffOut");
            $(this).css("pointerEvents", "none");
            var thisIs = this;
            setTimeout(function()
            {
                $(thisIs).addClass('loaded');
            }, 1000);
        });
        Resize();
        setTimeout(function()
        {
          Resize();
        }, 1000);
        setTimeout(function()
        {
          Resize();
        }, 1500);
    }

    var resizeTimer;
    $(window).resize(function()
    {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(Resize, 100);
    });
});

function AroundPointRatio(width, height, preferedWidth, preferedHeight, allowence)
{
    var ratio = width / height;
    var prefRatio = preferedWidth / preferedHeight;

    if (NearlyEqual(ratio, prefRatio, allowence))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function NearlyEqual(a, b, allowence)
{
    if (a > b - allowence && a < b + allowence)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function RandomSplits(total, amountOfValues, min, max)
{
    var trueTotal = 0;
    var a = [];
    for (var i = 0; i < amountOfValues; i++)
    {
        var currentPercent = GetRandomArbitrary(min, max);
        trueTotal += currentPercent;
        a.push(currentPercent);
    }
    for (var i = 0; i < a.length; i++)
    {
        a[i] = a[i] / trueTotal;
        a[i] = a[i] * total;
    }
    return a;
}

function Resize()
{ 
    $(".secondBody").css("top", $(".mainBody").offset().top);
    $(".secondBody").css("left", $(".mainBody").offset().left);
    $(".secondBody").css("width", $(".mainBody").width());
    $(".secondBody").css("height", $(".mainBody").height());

    $(".secondBody").find("*").textfill(
    {
        minFontPixels: 5,
        maxFontPixels: 900
    });
}

var clicked = false;

function GetRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function GetRandomArbitrary(min, max)
{
    return Math.random() * (max - min) + min;
}

function SnellClick(e)
{
    if (clicked == false)
    {
        clicked = true;
        $("#snellGlow").css("left", e.pageX);
        $("#snellGlow").css("top", e.pageY);
        $("#snellGlow").css("box-shadow", "0 0 10px 0 rgba(0, 0, 0, 0.9)");
        $("#snellGlow").animate(
        {
            boxShadow: "0 0 9000000px 1850px rgba(255, 255, 255, 1)"
        },
        {
            duration: 1500,
            easing: "linear"
        });
        $("#snellGlow").css("z-index", "10000");
        setTimeout(function delayed()
        {
            GoToPageFromHouse("Snell");
        }, 2000);
    }
}

function HillaryClick(e)
{
    if (clicked == false)
    {
        clicked = true;
        $("#hillaryGlow").css("left", e.pageX);
        $("#hillaryGlow").css("top", e.pageY);
        $("#hillaryGlow").css("box-shadow", "0 0 10px 0 rgba(250, 255, 0, 0.9)");
        $("#hillaryGlow").animate(
        {
            boxShadow: "0 0 9000000px 1850px rgba(255, 255, 255, 1)"
        },
        {
            duration: 1500,
            easing: "linear",
        });
        $("#hillaryGlow").css("z-index", "10000");
        setTimeout(function delayed()
        {
            GoToPageFromHouse("Hillary");
        }, 2000);
    }
}

function RutherfordClick(e)
{
    if (clicked == false)
    {
        clicked = true;
        $("#rutherfordGlow").css("left", e.pageX);
        $("#rutherfordGlow").css("top", e.pageY);
        $("#rutherfordGlow").css("box-shadow", "0 0 10px 0 rgba(255, 0, 0, 0.9)");
        $("#rutherfordGlow").animate(
        {
            boxShadow: "0 0 8000000px 3000px rgba(255, 255, 255, 1)"
        },
        {
            duration: 1500,
            easing: "linear"
        });
        $("#rutherfordGlow").css("z-index", "1000");
        setTimeout(function delayed()
        {
            GoToPageFromHouse("Rutherford");
        }, 2000);
    }
}

function TepueaClick(e)
{
    if (clicked == false)
    {
        clicked = true;
        $("#tepueaGlow").css("left", e.pageX);
        $("#tepueaGlow").css("top", e.pageY);
        $("#tepueaGlow").css("box-shadow", "0 0 10px 0 rgba(0, 198, 26, 0.9)");
        $("#tepueaGlow").animate(
        {
            boxShadow: "0 0 8000000px 3000px rgba(255, 255, 255, 1)"
        },
        {
            duration: 1500,
            easing: "linear"
        });
        $("#tepueaGlow").css("z-index", "1000");
        setTimeout(function delayed()
        {
            GoToPageFromHouse("Tepuea");
        }, 2000);
    }
}

function SheppardClick(e)
{
    if (clicked == false)
    {
        clicked = true;
        $("#sheppardGlow").css("left", e.pageX);
        $("#sheppardGlow").css("top", e.pageY);
        $("#sheppardGlow").css("box-shadow", "0 0 10px 0 rgba(0, 132, 198, 0.9)");
        $("#sheppardGlow").animate(
        {
            boxShadow: "0 0 8000000px 3000px rgba(255, 255, 255, 1)"
        },
        {
            duration: 1500,
            easing: "linear"
        });
        $("#sheppardGlow").css("z-index", "1000");
        setTimeout(function delayed()
        {
            GoToPageFromHouse("Sheppard");
        }, 2000);
    }
}

function GoToPageFromHouse(page)
{
    window.location.href = "../" + page + "/";
}

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function FadeOut()
{
    $("#loaderWrapper").addClass("magictime puffOut");
    $("#loaderWrapper").css("pointerEvents", "none");
    setTimeout(function()
    {
        $("#loaderWrapper").addClass('loaded');
    }, 1000);
}