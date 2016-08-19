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
            width: 1080,
            height: 700
        }
    });
    var wallTop = Matter.Bodies.rectangle(0, 0, 3000, 20, {
        isStatic: true
    });
    var wallBot = Matter.Bodies.rectangle(0, render.options.height, 3000, 20, {
        isStatic: true
    });
    var wallLeft = Matter.Bodies.rectangle(0, 0, 20, 3000, {
        isStatic: true
    });
    var wallRight = Matter.Bodies.rectangle(render.options.width, 0, 20, 3000, {
        isStatic: true
    });

    console.log(engine.world.gravity.scale);
    engine.world.gravity.scale = 0;

    var box = Matter.Bodies.rectangle(500, 400, 500, 150);
    Matter.World.add(engine.world, [wallTop, wallBot, wallLeft, wallRight, box]);
    // run the engine
    Matter.Engine.run(engine);

    // run the renderer
    Matter.Render.run(render);
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function FadeOut() {
    $("#loaderWrapper").addClass("loaded");
}
