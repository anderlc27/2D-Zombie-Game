class EnemyRight {
  constructor() {
    this.x = 600;
    this.y = 300;
    this.xspeed = 1;
    // this.yspeed = 0;
  }

    update() {
        this.x = this.x - this.xspeed * 2;
    }

  show() {
      image(badguy, this.x, this.y, character.width/10, character.height/10);

  }
}
