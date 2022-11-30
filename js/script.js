"use strict";
class Control {
    constructor() {
        this.btn_start = document.getElementById("btn-start");
        this.btn_continue = document.getElementById("btn-continue");
        this.btn_pause = document.getElementById("btn-pause");
        this.btn_reset = document.getElementById("btn-reset");
    }
    onPlay() {
        this.reset();
        this.btn_pause.style.display = "block";
        this.btn_reset.style.display = "block";
    }
    onReset() {
        this.reset();
        this.btn_start.style.display = "block";
    }
    onPause() {
        this.reset();
        this.btn_continue.style.display = "block";
        this.btn_reset.style.display = "block";
    }
    reset() {
        let buttons = document.getElementsByClassName("stopwatch-button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute("style", "display: none");
        }
    }
}
class Display {
    constructor() {
        this.digit_minutes = document.getElementById("digit-minutes");
        this.digit_seconds = document.getElementById("digit-seconds");
        this.digit_milliseconds = document.getElementById("digit-milliseconds");
    }
    setTime(minutes, seconds, milliseconds) {
        this.digit_minutes.innerHTML = leftPad(minutes, 2) + ":";
        this.digit_seconds.innerHTML = leftPad(seconds, 2) + ".";
        this.digit_milliseconds.innerHTML = leftPad(milliseconds, 3);
    }
}
$(() => {
    var _a, _b, _c, _d;
    const display = new Display();
    const controller = new Control();
    const app = new Stopwatch(display, controller);
    (_a = document.getElementById("btn-start")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => app.play());
    (_b = document.getElementById("btn-continue")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => app.continue());
    (_c = document.getElementById("btn-pause")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => app.pause());
    (_d = document.getElementById("btn-reset")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => app.reset());
});
class Stopwatch {
    constructor(display, controller) {
        this.time = 0;
        this.beforeTime = 0;
        this.interval_id = NaN;
        this.display = display;
        this.constroller = controller;
    }
    clock() {
        let now = Date.now();
        let different = now - this.beforeTime;
        this.time += different;
        this.render();
        this.beforeTime = now;
    }
    play() {
        if (isNaN(this.interval_id)) {
            this.beforeTime = Date.now();
            this.constroller.onPlay();
            this.interval_id = setInterval(() => {
                this.clock();
            }, DELAY);
        }
    }
    pause() {
        if (!isNaN(this.interval_id)) {
            clearInterval(this.interval_id);
            this.interval_id = NaN;
            this.constroller.onPause();
        }
    }
    continue() {
        this.play();
        this.constroller.onPlay();
    }
    reset() {
        this.pause();
        this.time = 0;
        this.render();
        this.constroller.onReset();
    }
    render() {
        let minutes = Math.floor((this.time % HOURS) / MINUTES);
        let seconds = Math.floor((this.time % MINUTES) / SECONDS);
        let milliseconds = this.time % 1000;
        this.display.setTime(minutes, seconds, milliseconds);
    }
}
const SECONDS = 1000;
const MINUTES = 60 * SECONDS;
const HOURS = 60 * MINUTES;
const DELAY = 10;
function $(func) {
    window.addEventListener("load", () => func());
}
function leftPad(value, lenght) {
    var str = "" + value;
    var pad = "0".repeat(lenght);
    var ans = pad.substring(0, pad.length - str.length) + str;
    return ans;
}
