class EnemyLeft {
  constructor() {
    this.x = 0;
    this.y = 300;
    this.xspeed = 1;
    // this.yspeed = 0;
  }

    update() {
        this.x = this.x + this.xspeed * 2;

    }

  show() {
      image(badguyLeft, this.x, this.y, character.width/10, character.height/10);
  }
}
