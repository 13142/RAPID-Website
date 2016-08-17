document.getElementById("sheppardPortrait").playbackRate = 1.6;

$(document).ready(function() {
  var stage = new PIXI.Container();
  var renderer = PIXI.autoDetectRenderer(640, 480, {backgroundColor: 0x00c9ff, antialias: true});

  document.getElementById("gameWindow").appendChild(renderer.view);
  var graphics = new PIXI.Graphics();

  graphics.beginFill(0xfb1717);
  graphics.drawCircle(60, 80, 15);
  graphics.endFill();

var x = 0;

  stage.addChild(graphics);

  requestAnimationFrame( animate );

  function animate() {
      renderer.render(stage);

      graphics.clear();
x+= 1;
      graphics.beginFill(0xffffff);
      graphics.drawCircle(x, 220, 18);
      graphics.endFill();
      requestAnimationFrame(animate);
  }
});

function FadeOut() {
    $("#loaderWrapper").addClass("loaded");
}
