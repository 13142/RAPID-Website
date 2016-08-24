document.getElementById("sheppardPortrait").playbackRate = 1.6;
$(document).ready(function() {
    var canvas = document.getElementById("gameWindow");
    var World = Matter.World,
        Bodies = Matter.Bodies,
        Composites = Matter.Composites,
        Common = Matter.Common;


    var engine = Matter.Engine.create();

    var render = Matter.Render.create({
        element: document.getElementById("gameWindow"),
        engine: engine,
        options: {
            width: 1080,
            height: 700
        }
    });
    UpdatePhysicsWindow();
    var wallTop = Matter.Bodies.rectangle(render.canvas.width / 2, 0, render.canvas.width + 2, 20, {
        isStatic: true
    });
    var wallBot = Matter.Bodies.rectangle(render.canvas.width / 2, render.canvas.height, render.canvas.width + 2, 20, {
        isStatic: true
    });
    var wallLeft = Matter.Bodies.rectangle(0, render.canvas.height / 2, 20, 5000, {
        isStatic: true
    });
    var wallRight = Matter.Bodies.rectangle(render.canvas.width, render.canvas.height / 2, 20, 5000, {
        isStatic: true
    });

    engine.world.gravity.scale = 0;
    var mouse1 = Matter.Mouse.create(render.canvas);
    var mouseCons = Matter.MouseConstraint.create(engine, {
        mouse: mouse1
    });
    var box = Matter.Bodies.rectangle(100, 200, 300, 50, {
        restitution: 0.8,
        friction: 0,
        frictionAir: 0.005,
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: 'Media/MannerWords.png',
                xScale: 0.3,
                yScale: 0.3,
            }
        }
    });
    var box3 = Matter.Bodies.rectangle(700, 600, 300, 50, {
        restitution: 0.8,
        friction: 0,
        frictionAir: 0.005,
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: 'Media/KindnessWords.png',
                xScale: 0.3,
                yScale: 0.3,
            }
        }
    });
    var box4 = Matter.Bodies.rectangle(900, 500, 300, 50, {
        restitution: 0.4,
        friction: 0,
        frictionAir: 0.005,
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: 'Media/MindfulWords.png',
                xScale: 0.3,
                yScale: 0.3,
            }
        }
    });
    var box2 = Matter.Bodies.rectangle(450, 300, 500, 150, {
        restitution: 0.8,
        friction: 0,
        frictionAir: 0.005,
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: 'Media/RespectWords.png',
                xScale: 0.6,
                yScale: 0.6,
            }
        }

    });
    box.torque = 10;
    Matter.World.add(engine.world, [wallTop, wallBot, wallLeft, wallRight, box, box2, box3, box4]);


    Matter.Body.applyForce(box, box.position, Matter.Vector.create(Math.random() / 2, Math.random() / 2));
    Matter.Body.applyForce(box3, box.position, Matter.Vector.create(Math.random() / 2, Math.random() / 2));
    Matter.Body.applyForce(box2, box.position, Matter.Vector.create(Math.random() / 2, Math.random() / 2));
    Matter.Body.applyForce(box4, box.position, Matter.Vector.create(Math.random() / 2, Math.random() / 2));

    var AllBodies = [box, box2, box3, box4];
    render.options.background = "#000000";
    render.options.wireframes = false;
    render.options.showAngleIndicator = false;

    var runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Matter.Events.on(runner, "tick", function(eventCall) {})

    Matter.Events.on(mouseCons, "mousedown", function(eventCall) {
            if (eventCall.mouse.button == 0) {
                for (var i = 0; i < AllBodies.length; i++) {
                    Matter.Body.applyForce(AllBodies[i], eventCall.mouse.position, Matter.Vector.mult(Matter.Vector.normalise(Matter.Vector.sub(eventCall.mouse.position, AllBodies[i].position)), -1));
                    console.log(AllBodies[i].sprite);
                }

            } else if (eventCall.mouse.button == 2) {
                for (var i = 0; i < AllBodies.length; i++) {
                    Matter.Body.applyForce(AllBodies[i], eventCall.mouse.position, Matter.Vector.mult(Matter.Vector.normalise(Matter.Vector.sub(eventCall.mouse.position, AllBodies[i].position)), 1));
                }
            }
        })
        // run the engine
        //  Matter.Engine.run(engine);

    // run the renderer
    Matter.Render.run(render);

    var resizeTimer;
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        console.log("gerge");

        resizeTimer = setTimeout(UpdatePhysicsWindow, 100);
    });

    function UpdatePhysicsWindow() {
        console.log(wallRight);
        render.canvas.height = (window.innerHeight - 183) / 1.15;
        render.canvas.width = window.innerWidth / 1.8;
        if (wallTop) {
            wallTop.vertices[1].x = render.canvas.width + 1;
            wallTop.vertices[2].x = render.canvas.width + 1;
            wallBot.vertices[1].y = render.canvas.height - 10;
            wallBot.vertices[2].y = render.canvas.height + 10;
            wallBot.vertices[0].y = render.canvas.height - 10;
            wallBot.vertices[3].y = render.canvas.height + 10;
            wallRight.vertices[1].x = render.canvas.width + 10;
            wallRight.vertices[2].x = render.canvas.width + 10;
            wallRight.vertices[0].x = render.canvas.width - 10;
            wallRight.vertices[3].x = render.canvas.width - 10;
        }
    };
});
var clicked = false;
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
    $("#loaderWrapper").addClass("loaded");
}
