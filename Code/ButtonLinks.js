var clicked = false;

function SheppardClick(e) {
    clicked = true;
    $("#sheppardGlow").css("left", e.pageX - $(".Sheppard").offset().left);
    $("#sheppardGlow").css("top", e.pageY - $(".Sheppard").offset().top);
    $("#sheppardGlow").css("box-shadow", "0 0 10px 0 rgba(0, 148, 255, 0.9)");
    $("#sheppardGlow").animate({
        boxShadow: "0 0 9000000px 1850px rgba(255, 255, 255, 1)"
    }, {
        duration: 1500,
        easing: "linear"
    });
    $("#sheppardGlow").css("z-index", "1000");
    $(".Sheppard").css("z-index", "-1");
}

function SnellClick(e) {
    clicked = true;
    $("#snellGlow").css("left", e.pageX - $(".Snell").offset().left);
    $("#snellGlow").css("top", e.pageY - $(".Snell").offset().top);
    $("#snellGlow").css("box-shadow", "0 0 10px 0 rgba(0, 0, 0, 0.9)");
    $("#snellGlow").animate({
        boxShadow: "0 0 9000000px 1850px rgba(255, 255, 255, 1)"
    }, {
        duration: 1500,
        easing: "linear"
    });
    $("#snellGlow").css("z-index", "1000");
    $(".Snell").css("z-index", "-1");
}

function HillaryClick(e) {
    clicked = true;
    $("#hillaryGlow").css("left", e.pageX - $(".Hillary").offset().left);
    $("#hillaryGlow").css("top", e.pageY - $(".Hillary").offset().top);
    $("#hillaryGlow").css("box-shadow", "0 0 10px 0 rgba(250, 255, 0, 0.9)");
    $("#hillaryGlow").animate({
        boxShadow: "0 0 9000000px 1850px rgba(255, 255, 255, 1)"
    }, {
        duration: 1500,
        easing: "linear"
    });
    $("#hillaryGlow").css("z-index", "1000");
    $(".Hillary").css("z-index", "-1");
}

function RutherfordClick(e) {
    clicked = true;
    $("#rutherfordGlow").css("left", e.pageX - $(".Rutherford").offset().left);
    $("#rutherfordGlow").css("top", e.pageY - $(".Rutherford").offset().top);
    $("#rutherfordGlow").css("box-shadow", "0 0 10px 0 rgba(255, 0, 0, 0.9)");
    $("#rutherfordGlow").animate({
        boxShadow: "0 0 9000000px 1850px rgba(255, 255, 255, 1)"
    }, {
        duration: 1500,
        easing: "linear"
    });
    $("#rutherfordGlow").css("z-index", "1000");
    $(".Rutherford").css("z-index", "-1");
}

function TepueaClick(e) {
    clicked = true;
    $("#tepueaGlow").css("left", e.pageX - $(".TePuea").offset().left);
    $("#tepueaGlow").css("top", e.pageY - $(".TePuea").offset().top);
    $("#tepueaGlow").css("box-shadow", "0 0 10px 0 rgba(0, 198, 26, 0.9)");
    $("#tepueaGlow").animate({
        boxShadow: "0 0 9000000px 1850px rgba(255, 255, 255, 1)"
    }, {
        duration: 1500,
        easing: "linear"
    });
    $("#tepueaGlow").css("z-index", "1000");
    $(".Tepuea").css("z-index", "-1");
}
