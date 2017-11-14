/* global window */

import * as p5 from 'p5';
import colors from 'colors';
import Mover from './Mover';

function sketch(p: any) {
    var balls: Mover[] = [];

    p.setup = function () {
        p.createCanvas(window.innerWidth, window.innerHeight);
        for (var i = 0; i < 60; i++) {
            balls.push(new Mover(p));
        }
    };

    p.draw = function () {
        p.clear();
        p.background(...colors.beige);

        balls.forEach(ball => {
            ball.move();
            ball.draw();
        })
    };
}

new p5(sketch);
