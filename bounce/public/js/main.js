/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* global p5 */
;
var Mover = /** @class */ (function () {
    function Mover(p) {
        this.p = p;
        this.pos = p.createVector(this.p.width / 2, this.p.height / 2);
        var dirs = [1, -1];
        var velx = (Math.floor(Math.floor(Math.random() * 500) / 100) + 1) * dirs[Math.round(Math.random())];
        var vely = (Math.floor(Math.floor(Math.random() * 500) / 100) + 1) * dirs[Math.round(Math.random())];
        this.vel = p.createVector(velx, vely);
        this.radius = 25;
    }
    Mover.prototype.move = function () {
        this.checkEdges();
        this.pos.add(this.vel);
    };
    Mover.prototype.checkEdges = function () {
        if (this.rightEdge > this.p.width || this.leftEdge < 0) {
            this.vel.x = this.vel.x * -1;
        }
        if (this.bottomEdge > this.p.height || this.topEdge < 0) {
            this.vel.y = this.vel.y * -1;
        }
    };
    Object.defineProperty(Mover.prototype, "rightEdge", {
        get: function () {
            return this.pos.x + this.radius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mover.prototype, "bottomEdge", {
        get: function () {
            return this.pos.y + this.radius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mover.prototype, "leftEdge", {
        get: function () {
            return this.pos.x - this.radius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mover.prototype, "topEdge", {
        get: function () {
            return this.pos.y - this.radius;
        },
        enumerable: true,
        configurable: true
    });
    Mover.prototype.draw = function () {
        this.p.fill(197, 89, 80);
        this.p.noStroke();
        this.p.ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);
    };
    return Mover;
}());
function sketch(p) {
    var balls = [];
    p.setup = function () {
        p.createCanvas(window.innerWidth, window.innerHeight);
        for (var i = 0; i < 60; i++) {
            balls.push(new Mover(p));
        }
    };
    p.draw = function () {
        p.clear();
        p.background(250, 249, 246);
        balls.forEach(function (ball) {
            ball.move();
            ball.draw();
        });
    };
}
var mySketch = new p5(sketch);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWQwYWZiMGFjY2ViZDE0NGY1ZTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSxlQUFlO0FBUWQsQ0FBQztBQUVGO0lBS0ksZUFBbUIsQ0FBTTtRQUFOLE1BQUMsR0FBRCxDQUFDLENBQUs7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENB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QUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRUYsQ0FBQyxDQUFDLElBQUksR0FBRztRQUNMLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNWLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUU1QixLQUFLLENBQUMsT0FBTyxDQUFDLGNBQUk7WUFDZCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVELElBQUksUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFkMGFmYjBhY2NlYmQxNDRmNWUzIiwiLyogZ2xvYmFsIHA1ICovXG5cbmRlY2xhcmUgdmFyIHA1OiBhbnk7XG5cbmludGVyZmFjZSBWZWN0b3Ige1xuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXIsXG4gICAgYWRkOiBhbnksXG59O1xuXG5jbGFzcyBNb3ZlciB7XG4gICAgcG9zOiBWZWN0b3I7XG4gICAgdmVsOiBWZWN0b3I7XG4gICAgcmFkaXVzOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcDogYW55KSB7XG4gICAgICAgIHRoaXMucG9zID0gcC5jcmVhdGVWZWN0b3IodGhpcy5wLndpZHRoIC8gMiwgdGhpcy5wLmhlaWdodCAvIDIpO1xuICAgICAgICBjb25zdCBkaXJzID0gWzEsIC0xXTtcbiAgICAgICAgY29uc3QgdmVseCA9IChNYXRoLmZsb29yKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwMCkgLyAxMDApICsgMSkgKiBkaXJzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xuICAgICAgICBjb25zdCB2ZWx5ID0gKE1hdGguZmxvb3IoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAwKSAvIDEwMCkgKyAxKSAqIGRpcnNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XG4gICAgICAgIHRoaXMudmVsID0gcC5jcmVhdGVWZWN0b3IodmVseCwgdmVseSk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gMjU7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5jaGVja0VkZ2VzKCk7XG4gICAgICAgIHRoaXMucG9zLmFkZCh0aGlzLnZlbCk7XG4gICAgfVxuXG4gICAgY2hlY2tFZGdlcygpIHtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRFZGdlID4gdGhpcy5wLndpZHRoIHx8IHRoaXMubGVmdEVkZ2UgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnZlbC54ID0gdGhpcy52ZWwueCAqIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbUVkZ2UgPiB0aGlzLnAuaGVpZ2h0IHx8IHRoaXMudG9wRWRnZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMudmVsLnkgPSB0aGlzLnZlbC55ICogLTE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgcmlnaHRFZGdlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvcy54ICsgdGhpcy5yYWRpdXM7XG4gICAgfVxuXG4gICAgZ2V0IGJvdHRvbUVkZ2UoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zLnkgKyB0aGlzLnJhZGl1cztcbiAgICB9XG5cbiAgICBnZXQgbGVmdEVkZ2UoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zLnggLSB0aGlzLnJhZGl1cztcbiAgICB9XG5cbiAgICBnZXQgdG9wRWRnZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3MueSAtIHRoaXMucmFkaXVzO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMucC5maWxsKDE5NywgODksIDgwKTtcbiAgICAgICAgdGhpcy5wLm5vU3Ryb2tlKCk7XG4gICAgICAgIHRoaXMucC5lbGxpcHNlKHRoaXMucG9zLngsIHRoaXMucG9zLnksIHRoaXMucmFkaXVzICogMiwgdGhpcy5yYWRpdXMgKiAyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNrZXRjaChwOiBhbnkpIHtcbiAgICB2YXIgYmFsbHM6IE1vdmVyW10gPSBbXTtcblxuICAgIHAuc2V0dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHAuY3JlYXRlQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgICAgICAgIGJhbGxzLnB1c2gobmV3IE1vdmVyKHApKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHAuY2xlYXIoKTtcbiAgICAgICAgcC5iYWNrZ3JvdW5kKDI1MCwgMjQ5LCAyNDYpO1xuXG4gICAgICAgIGJhbGxzLmZvckVhY2goYmFsbCA9PiB7XG4gICAgICAgICAgICBiYWxsLm1vdmUoKTtcbiAgICAgICAgICAgIGJhbGwuZHJhdygpO1xuICAgICAgICB9KVxuICAgIH07XG59XG5cbnZhciBteVNrZXRjaCA9IG5ldyBwNShza2V0Y2gpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RzL2luZGV4LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==