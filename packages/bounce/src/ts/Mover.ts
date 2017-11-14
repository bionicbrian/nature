import colors from 'colors';

interface Vector {
    x: number,
    y: number,
    add: any,
};

export default class Mover {
    pos: Vector;
    vel: Vector;
    radius: number;

    constructor(public p: any) {
        this.pos = p.createVector(this.p.width / 2, this.p.height / 2);
        const dirs = [1, -1];
        const velx = (Math.floor(Math.floor(Math.random() * 500) / 100) + 1) * dirs[Math.round(Math.random())];
        const vely = (Math.floor(Math.floor(Math.random() * 500) / 100) + 1) * dirs[Math.round(Math.random())];
        this.vel = p.createVector(velx, vely);
        this.radius = 25;
    }

    move() {
        this.checkEdges();
        this.pos.add(this.vel);
    }

    checkEdges() {
        if (this.rightEdge > this.p.width || this.leftEdge < 0) {
            this.vel.x = this.vel.x * -1;
        }
        if (this.bottomEdge > this.p.height || this.topEdge < 0) {
            this.vel.y = this.vel.y * -1;
        }
    }

    get rightEdge(): number {
        return this.pos.x + this.radius;
    }

    get bottomEdge(): number {
        return this.pos.y + this.radius;
    }

    get leftEdge(): number {
        return this.pos.x - this.radius;
    }

    get topEdge(): number {
        return this.pos.y - this.radius;
    }

    draw() {
        this.p.fill(...colors.orange);
        this.p.noStroke();
        this.p.ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);
    }
}
