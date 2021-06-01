// canvas dimesion
const canvasWidth = 900;
const canvasHeight = 600;
const canvas = document.getElementById("mycanvas");

// context object
const ctx = canvas.getContext("2d");

// enemies
const enemies = [
  {
    xPos: 150,
    yPos: 50,
    width: 60,
    height: 60,
    speed: 20,
  },
  {
    xPos: 300,
    yPos: 150,
    width: 60,
    height: 60,
    speed: 30,
  },
  {
    xPos: 450,
    yPos: 20,
    width: 60,
    height: 60,
    speed: 40,
  },
];

// player
const player = {
  xPos: 20,
  yPos: canvasHeight / 2,
  width: 60,
  height: 60,
  speed: 20,
  health: 0,
  movement: false,
};

// vaccine
const vaccine = {
  xPos: canvasWidth - 100,
  yPos: canvasHeight / 2,
  width: 60,
  height: 60,
};

// virus image
const virusImage = new Image();
virusImage.src = "../Assets/virus.png";

// player image
const playerImage = new Image();
playerImage.src = "../Assets/human.png";

// vaccine image
const vaccineImage = new Image();
vaccineImage.src = "../Assets/vac1.png";

// Audio for win

const win = new Audio();
win.src = "../Sound/won.wav";

// Audio for lose

const lose = new Audio();
lose.src = "../Sound/dead.mp3";

// for x axis
const minGapX = 90;
const maxGapX = 150;

// for y axis
const minGapY = 70;
const maxGapY = 140;

const fps = 20;

let gameOver = false;
let level = 1;
