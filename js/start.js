const runGame = function () {
  document.getElementById("newGame").style.display = "none";
  document.getElementById("theHead").style.display = "none";

  document.getElementById("credits").style.display = "none";
  document.getElementById("creditBtn").style.display = "none";

  document.getElementById("mycanvas").style.display = "block";

  init();
  // let resultTime = setInterval(gameloop, 100);
  resultTime = requestAnimationFrame(gameloop);
};
const showCredits = function () {
  document.getElementById("theHead").style.display = "none";
  document.getElementById("creditBtn").style.display = "none";
  document.getElementById("newGame").style.display = "none";
  document.getElementById("credits").style.display = "block";
  document.getElementById("mycanvas").style.display = "none";
  document.getElementById("backBtn").style.display = "block";
};

const goBack = function () {
  document.getElementById("backBtn").style.display = "none";
  document.getElementById("credits").style.display = "none";
  document.getElementById("theHead").style.display = "block";
  document.getElementById("mycanvas").style.display = "none";
  document.getElementById("newGame").style.display = "block";
  document.getElementById("creditBtn").style.display = "block";
  location.reload();
  return false;
};
function gameloop() {
  setTimeout(function () {
    //throttle requestAnimationFrame to 20fps
    if (gameOver) {
      cancelAnimationFrame(resultTime);
      return;
    }
    draw();
    update();
    requestAnimationFrame(gameloop);
  }, 1000 / fps);
}
