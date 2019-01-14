class BallBullet {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.xspeed = 1;
    }

    dir (x,y) {
        this.xspeed = x;
    }

    update() {
        if (orientationLeft == false) {
            this.x = this.x + this.xspeed * 14;
        }
        else{
            this.x = this.x - this.xspeed * 14;
        }

    }

    show() {
        fill("#00ff00");
        ellipse(this.x, this.y, 10, 10);
    }
}
