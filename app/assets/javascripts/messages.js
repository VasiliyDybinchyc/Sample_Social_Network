/*
$(document).ready(function(){
    $(".message-picture, #avatar").click(function(){
      var c     = document.getElementById("cavans");
      var ctx   = c.getContext("2d");
      img       = new Image();
      img.src   = $(this).attr("src");
      c.height  = img.naturalHeight;
      c.width   = img.naturalWidth;
      ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
    });
});

var cavans = document.getElementById("cavans");
var moving = false;
cavans.addEventListener("mousedown", initialClick, false);

function move(e){
  var newX = e.clientX - 100;
  var newY = e.clientY - 0;

  image.style.left = newX + "px";
  image.style.top = newY + "px";
}

function initialClick(e) {

  if(moving){
    document.removeEventListener("mousemove", move);
    moving = !moving;
    return;
  }

  moving = !moving;
  image = this;

  document.addEventListener("mousemove", move, false);
}
*/
