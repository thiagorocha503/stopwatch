"use strict";
// Button
const btn_start = document.getElementById("btn-start");
const btn_continue = document.getElementById("btn-continue");
const btn_pause = document.getElementById("btn-pause");
const btn_reset = document.getElementById("btn-reset");
// Digits
const digit_minutes = document.getElementById("digit-minutes");
const digit_seconds = document.getElementById("digit-seconds");
const digit_milliseconds = document.getElementById("digit-milliseconds");
// 
const SECONDS = 1000;
const MINUTES = 60 * SECONDS;
const HOURS = 60 * MINUTES;
const DELAY = 10;
//
var time = 0;
var beforeTime;
var interval_id = NaN;
function setVisibleStartButton(visible) {
    if (visible) {
        btn_start.style.display = "block";
    }
    else {
        btn_start.style.display = "none";
    }
}
function setVisiblePauseButton(visible) {
    if (visible) {
        btn_pause.style.display = "block";
    }
    else {
        btn_pause.style.display = "none";
    }
}
function setVisibleContinueButton(visible) {
    if (visible) {
        btn_continue.style.display = "block";
    }
    else {
        btn_continue.style.display = "none";
    }
}
function setVisibleResetButton(visible) {
    if (visible) {
        btn_reset.style.display = "block";
    }
    else {
        btn_reset.style.display = "none";
    }
}
function clock() {
    var now = Date.now();
    var diferrent = now - beforeTime;
    time += diferrent;
    render();
    beforeTime = now;
}
function onStart() {
    if (isNaN(interval_id)) {
        beforeTime = Date.now();
        setVisibleStartButton(false);
        setVisiblePauseButton(true);
        setVisibleResetButton(true);
        setVisibleContinueButton(false);
        interval_id = setInterval(clock, DELAY);
    }
}
function onPause() {
    console.log(">> Pause");
    if (!isNaN(interval_id)) {
        clearInterval(interval_id);
        interval_id = NaN;
        setVisiblePauseButton(false);
        setVisibleContinueButton(true);
    }
}
function onContinue() {
    onStart();
}
function onReset() {
    onPause();
    time = 0;
    render();
    setVisibleResetButton(false);
    setVisibleContinueButton(false);
    setVisiblePauseButton(false);
    setVisibleStartButton(true);
}
function render() {
    var minutes = Math.floor((time % HOURS) / MINUTES);
    var seconds = Math.floor((time % MINUTES) / SECONDS);
    var milliseconds = time % 1000;
    digit_minutes.innerHTML = leftPad(minutes, 2) + ":";
    digit_seconds.innerHTML = leftPad(seconds, 2) + ".";
    digit_milliseconds.innerHTML = leftPad(milliseconds, 3);
    console.log("> " + leftPad(minutes, 2) +
        ":" + leftPad(seconds, 2) + "." + leftPad(milliseconds, 3));
}
function leftPad(value, lenght) {
    var str = "" + value;
    var pad = "0".repeat(lenght);
    var ans = pad.substring(0, pad.length - str.length) + str;
    return ans;
}
setVisiblePauseButton(false);
setVisibleResetButton(false);
setVisibleContinueButton(false);
