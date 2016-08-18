document.getElementById("sheppardPortrait").playbackRate = 1.6;

$(document).ready(function() {
    var stage = new PIXI.Container();
    var renderer = PIXI.autoDetectRenderer(1080, 750, {
        backgroundColor: 0x00c9ff,
        antialias: true
    });

    document.getElementById("gameWindow").appendChild(renderer.view);
    //var graphics = new PIXI.Graphics();

    // graphics.beginFill(0xffffff);
    // var playerS = graphics.drawCircle(60, 80, 15);
    // graphics.endFill();
var player;
    PIXI.loader.add('whiteCircle', "Media/whiteCircle.png").load(function(loader, resources) {
        // This creates a texture from a 'bunny.png' image.
        player = new PIXI.Sprite(PIXI.loader.resources.whiteCircle.texture);

        // Setup the position and scale of the bunny
        player.x = 400;
        player.y = 300;

        // whiteCircle.scale.x = 2;
        // whiteCircle.scale.y = 2;
        player.vx = 10;
        player.vy = 0;
        // Add the bunny to the scene we are building.
        stage.addChild(player);

        // kick off the animation loop (defined below)
        animate();
    });
var deltaTime;
var lastTime;
    function animate(timestamp) {
      if (!lastTime) {
        lastTime = timestamp;
      }
      deltaTime = (timestamp - lastTime)/ 1000;
      lastTime = timestamp;
      console.log(player.x);
    //  if (!start) start = timestamp;
    //  var progress = timestamp - start;
        renderer.render(stage);
        if (deltaTime) {
          player.x += player.vx * deltaTime;
          player.y += player.vy;
        }
        requestAnimationFrame(animate);
    }
});

function FadeOut() {
    $("#loaderWrapper").addClass("loaded");
}
