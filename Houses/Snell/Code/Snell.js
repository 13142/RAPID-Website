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
            //hasBounds: true,
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
    var box = Matter.Bodies.rectangle(100, 200, 200, 150, {
        restitution: 0.8,
        friction: 0,
        frictionAir: 0.005,
        strokeStyle: '#ffffff',
        sprite: {
            texture: 'w.png'
        }
    });
    var box2 = Matter.Bodies.rectangle(500, 400, 500, 150, {
        restitution: 0.8,
        friction: 0,
        frictionAir: 0.005,
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: 'w.png'
            }
        }

    });
    box.torque = 10;
    Matter.World.add(engine.world, [wallTop, wallBot, wallLeft, wallRight, box, box2]);

    Math.random
    Matter.Body.applyForce(box, box.position, Matter.Vector.create(Math.random() / 2, Math.random() / 2));
    Matter.Body.applyForce(box, box.position, Matter.Vector.create(Math.random() / 2, Math.random() / 2));

    var AllBodies = [box, box2];
    render.options.background = 'w.png';
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
        render.canvas.height = $("#gameWindow").height() - 10;
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

    $("#leftCover").css({
        top: $("#leftCol").offset().top,
        left: $("#leftCol").offset().left,
        width: $("#leftCol").outerWidth(),
        height: $("#leftCol").outerHeight()
    });

    $("#rightCover").css({
        top: $("#rightCol").offset().top,
        left: $("#rightCol").offset().left,
        width: $("#rightCol").outerWidth(),
        height: $("#rightCol").outerHeight()
    });

    $("#leftCover").click(function() {
        $(this).addClass("magictime puffOut");
        setTimeout(function() {
        $("#loaderWrapper").addClass('loaded');
    }, 1000);
    });
    $("#rightCover").click(function() {
        $(this).addClass("magictime puffOut");
        setTimeout(function() {
        $("#loaderWrapper").addClass('loaded');
    }, 1000);
    });

});
function GoToPageFromSheppard(page) {
    window.location.href = "../" + page + "/index.html";
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function FadeOut() {
    $("#loaderWrapper").addClass("magictime puffOut");
    setTimeout(function() {
    $("#loaderWrapper").addClass('loaded');
}, 1000);
}
