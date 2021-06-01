function init() {
  // define the canvas dimension
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
}

function draw() {
  //  clear the canvas are before drawing
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // draw player
  ctx.drawImage(
    playerImage,
    player.xPos,
    player.yPos,
    player.width,
    player.height
  );

  // draw vaccine
  ctx.drawImage(
    vaccineImage,
    vaccine.xPos,
    vaccine.yPos,
    vaccine.width,
    vaccine.height
  );
  // draw enemies
  for (let i = 0; i < enemies.length; i++) {
    ctx.drawImage(
      virusImage,
      enemies[i].xPos,
      enemies[i].yPos,
      enemies[i].width,
      enemies[i].height
    );
  }

  // draw score
  ctx.fillStyle = "white";
  if (player.health < 0) {
    ctx.fillText("Score 0 ", 10, 30);
  } else {
    ctx.fillText("Score " + player.health, 10, 30);
  }
  ctx.font = "30px Roboto";
  ctx.fillText("Level " + level, canvasWidth - 200, 30);
}

function update() {
  // check if player state is moving and increase it position
  if (player.movement) {
    player.xPos += player.speed;
  }

  // check if box passes the canvas frame
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].yPos += enemies[i].speed;

    if (
      enemies[i].yPos > canvasHeight - enemies[i].height ||
      enemies[i].yPos < 0
    ) {
      enemies[i].speed *= -1;
    }
  }

  // check collision between player and vaccine
  if (collision(player, vaccine)) {
    win.play();
    // increase the health
    player.health += 10;
    //  increase health
    level += 1;
    // reset the position of player for next level
    resetPos();

    // increase the number of virus
    incrementVirus();
  }

  // check collision between player and virus

  for (let i = 0; i < enemies.length; i++) {
    if (collision(player, enemies[i])) {
      player.health -= 5;
      lose.play();
      if (player.health < 0) {
        gameOver = true;
        alert("You Died Due to Corona");
        restart();
      }
    }
  }
}

// reset to initial position

function resetPos() {
  (player.xPos = 20), (player.yPos = canvasHeight / 2);
}

// increament the number of virus

function incrementVirus() {
  let gapX = randomIntFromInterval(minGapX, maxGapX);
  let gapY = randomIntFromInterval(minGapY, maxGapY);
  const virus = {};
  virus["xPos"] = 500 + gapX;
  virus["yPos"] = 0 + gapY;
  virus["width"] = 60;
  virus["height"] = 60;
  virus["speed"] = 20;
  enemies.push(virus);
}

// restart the game

const restart = function () {
  document.getElementById("theHead").style.display = "block";
  document.getElementById("theHead").innerHTML =
    "Your Highest Level = " + level;
  document.getElementById("backBtn").style.display = "block";
  document.getElementById("mycanvas").style.display = "none";
};

// random number
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// event listner

window.document.addEventListener("keydown", function (e) {
  if (e.keyCode == "39") {
    player.movement = true;
  }
});
window.document.addEventListener("keyup", function (e) {
  if (e.keyCode == "39") {
    player.movement = false;
  }
});
