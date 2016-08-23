document.getElementById("sheppardPortrait").playbackRate = 1.6;
$(document).ready(function() {
    var canvas = document.getElementById("gameWindow");
    var World = Matter.World,
        Bodies = Matter.Bodies,
        Composites = Matter.Composites,
        Common = Matter.Common;
    // var stage = new PIXI.Container();
    // var renderer = PIXI.autoDetectRenderer(1080, 700, {
    //     backgroundColor: 0x00c9ff,
    //     antialias: true
    // });
    //
    // document.getElementById("gameWindow").appendChild(renderer.view);
    // //var graphics = new PIXI.Graphics();
    //
    // // graphics.beginFill(0xffffff);
    // // var playerS = graphics.drawCircle(60, 80, 15);
    // // graphics.endFill();
    // var player;
    // var speed = 150;
    // var wKeyListener = keyboard(87);
    // var aKeyListener = keyboard(65);
    // var sKeyListener = keyboard(83);
    // var dKeyListener = keyboard(68);
    // PIXI.loader.add('whiteCircle', "Media/whiteCircle.png").load(function(loader, resources) {
    //     // This creates a texture from a 'bunny.png' image.
    //     graphics = new PIXI.Graphics();
    //     graphics.beginFill(0xffffff);
    //     player = graphics.drawCircle(40, 40, 20);
    //     graphics.endFill();
    //     //new PIXI.Sprite(PIXI.loader.resources.whiteCircle.texture);
    //
    //     enemyGraphics = new PIXI.Graphics();
    //     enemyGraphics.beginFill(0xff0000);
    //     for (var i = 0; i < 20; i++) {
    //        enemyGraphics.drawCircle(getRandomInt(20, 1000), getRandomInt(20, 650), 18);
    //     }
    //     enemyGraphics.endFill();
    //     // Setup the position and scale of the bunny
    //     player.x = 400;
    //     player.y = 300;
    //
    //     // whiteCircle.scale.x = 2;
    //     // whiteCircle.scale.y = 2;
    //     player.vx = 0;
    //     player.vy = 0;
    //     // Add the bunny to the scene we are building.
    //     stage.addChild(player);
    //     stage.addChild(enemyGraphics);
    //
    //     // kick off the animation loop (defined below)
    //     animate();
    // });
    // var deltaTime;
    // var lastTime;
    //
    // function animate(timestamp) {
    //     if (!lastTime) {
    //         lastTime = timestamp;
    //     }
    //     deltaTime = (timestamp - lastTime) / 1000;
    //     lastTime = timestamp;
    //     console.log(1/deltaTime);
    //     //  if (!start) start = timestamp;
    //     //  var progress = timestamp - start;
    //     renderer.render(stage);
    //     if (deltaTime) {
    //         player.x += player.vx * deltaTime;
    //         player.y += player.vy * deltaTime;
    //     }
    //     requestAnimationFrame(animate);
    // }
    //
    // function keyboard(keyCode) {
    //     var key = {};
    //     key.code = keyCode;
    //     key.isDown = false;
    //     key.isUp = true;
    //     key.press = undefined;
    //     key.release = undefined;
    //     //The `downHandler`
    //     key.downHandler = function(event) {
    //         if (event.keyCode === key.code) {
    //             if (key.isUp && key.press) key.press();
    //             key.isDown = true;
    //             key.isUp = false;
    //         }
    //         event.preventDefault();
    //     };
    //
    //     //The `upHandler`
    //     key.upHandler = function(event) {
    //         if (event.keyCode === key.code) {
    //             if (key.isDown && key.release) key.release();
    //             key.isDown = false;
    //             key.isUp = true;
    //         }
    //         event.preventDefault();
    //     };
    //
    //     //Attach event listeners
    //     window.addEventListener(
    //         "keydown", key.downHandler.bind(key), false
    //     );
    //     window.addEventListener(
    //         "keyup", key.upHandler.bind(key), false
    //     );
    //     return key;
    // }
    //
    // //Keys
    // wKeyListener.press = function () {
    //   player.vy = -(speed);
    // }
    // wKeyListener.release = function () {
    //   if (!sKeyListener.isDown) {
    //     player.vy = 0;
    //   }else {
    //     player.vy = speed;
    //   }
    // }
    // aKeyListener.press = function () {
    //   player.vx = -(speed);
    // }
    // aKeyListener.release = function () {
    //   if (!dKeyListener.isDown) {
    //       player.vx = 0;
    //   } else {
    //       player.vx = speed;
    //   }
    //
    // }
    // sKeyListener.press = function () {
    //   player.vy = (speed);
    // }
    // sKeyListener.release = function () {
    //   if (!wKeyListener.isDown) {
    //     player.vy = 0;
    //   }else {
    //     player.vy = -speed;
    //   }
    // }
    // dKeyListener.press = function () {
    //   player.vx = (speed);
    // }
    // dKeyListener.release = function () {
    //   if (!aKeyListener.isDown) {
    //       player.vx = 0;
    //   } else {
    //       player.vx = -speed;
    //   }
    // }
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
function GoToPageFromSheppard(page) {
    window.location.href = "../" + page + "/index.html";
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function FadeOut() {
    $("#loaderWrapper").addClass("loaded");
}
