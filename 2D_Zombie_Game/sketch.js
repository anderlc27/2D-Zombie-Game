let gameCharacter,character, characterR, badguy, badguyleft, backgroundImage, ball, newx;
let gameEnemy = [];
var canvasWidth = 600, canvasHeight = 400;
var font, fontsize = 40;
let i = 5, k = 0, count = 0;
let orientationLeft = false;
let score = 0;
let timer = 60;

// This function loads all of the necessary fonts and images
function preload() {
    character = loadImage("image/game-sprite-png-3.png");
    badguy = loadImage("image/game-sprite-png-1.png");
    badguyLeft =
    loadImage("image/game-sprite-png-1R.png");
    characterR = loadImage("image/game-sprite-png-3R.png");
    font = loadFont("image/Gobold Bold.ttf");
}

// This function creates the canvas for the game loop and the canvas for the screen after the time runs out.
// The character and enemies are initially created.
function setup() {
  if (timer != 0) {
      backgroundImage = loadImage("image/background_art.jpg");
      createCanvas(canvasWidth, canvasHeight);
      textFont(font);
      textSize(fontsize);
      textAlign(CENTER,CENTER);
      gameCharacter = new Player(canvasWidth/2 - 20, canvasHeight);
        while (k < 10) {
          if (random(1,100) > 50) {
            gameEnemy[k] = new EnemyRight();
          }
          else {
            gameEnemy[k] = new EnemyLeft();
          }
          k++;
      }
  }
  else {
      remove();
      createCanvas(canvasWidth, canvasHeight);
  }

}

// This function displays the canvases and all of the character movements
function draw() {
  if (timer > 0) {
      background(backgroundImage);
      textAlign(LEFT);
      drawWords1(10, 30);

      textAlign(LEFT);
      drawWords2(420);

      gameCharacter.update();
      gameCharacter.show();

      for (var index = 0; index < 10; index++) {
         gameEnemy[index].update();
         gameEnemy[index].show();
      }

      if (keyCode == 32) {
          ball.update();
          ball.show();
          for (var count = 13; count != 0; count--) {
              newx = ball.x - count;
              respawnEnemies();
              if (newx == 600 || newx == 0) {
                  delete ball.x;
              }
          }
      }
  }
  else {
      background("Black");
      textAlign(CENTER);
      drawWords1(canvasWidth/2, canvasHeight/2 - 50);
      drawWord3();
  }
}

// This function displays the score
function drawWords1 (x, y) {
    fill("White");
    text("SCORE:" + score, x, y);
}

// This function displays the timer
function drawWords2 (x) {
    fill("White");
    text("Timer: " + timer, x, 30);
    if (frameCount % 60 == 0) {
        timer--;
    }
}

// This function displays the message after time runs out
function drawWord3() {
    fill ("White");
    text("Press Enter to Play Again!!",canvasWidth/2, canvasHeight/2 + 50);
}

// This function randomly generates the enemies to come either from the left or the right
function randomlyGenerateEnemies() {
  if (random(1,100) > 50) {
      gameEnemy[i % 10] = new EnemyRight();
  }
  else {
      gameEnemy[i % 10] = new EnemyLeft();
  }
  i++;
}
setInterval(randomlyGenerateEnemies, 1000);

// This function regenerates the enemies after the player shoots them
function respawnEnemies() {
    for (var index = 0; index < 10; index++) {
       if (gameEnemy[index].x == newx) {
           if (random(1,100) > 50) {
               gameEnemy[index] = new EnemyRight();
           }
           else {
               gameEnemy[index] = new EnemyLeft();
           }
           score++;
       }
    }
}

// This function assigns keys to perform different tasks upon the character after being pressed.
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    gameCharacter.dir(1, 0);
    orientationLeft = false;
  } else if (keyCode === LEFT_ARROW) {
    gameCharacter.dir(-1, 0);
    orientationLeft = true;
  }
  if (keyCode === 32) {
      ball = new BallBullet(gameCharacter.x, 350);
  }
  if (keyCode === ENTER) {
      if (timer <= 0) {
        timer = 60;
        score = 0;
      }
  }
}

// This function enables the character to stop moving after pressing the arrow keys
function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    gameCharacter.dir(0, 0);
  } else if (keyCode === LEFT_ARROW) {
    gameCharacter.dir(0, 0);
  }
}
