class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    // this.yspeed = 0;

  }

    dir (x,y) {
        this.xspeed = x;
        // this.yspeed = y;
    }

    update() {
        this.x = this.x + this.xspeed*5;
        // this.y = this.y + this.yspeed*5;

        this.x = constrain(this.x, 0, canvasWidth - character.width/10);
        this.y = constrain(this.y, 0, canvasHeight - character.height/10);
    }

  show() {
      if (orientationLeft == true) {
          image(characterR, this.x, this.y, characterR.width/10, character.height/10);
      }
      else {
          image(character, this.x, this.y, character.width/10, character.height/10);
      }
  }

}
