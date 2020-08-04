// Button
const btn_start: HTMLButtonElement = document.getElementById("btn-start") as HTMLButtonElement;
const btn_continue: HTMLButtonElement = document.getElementById("btn-continue") as HTMLButtonElement;
const btn_pause: HTMLButtonElement = document.getElementById("btn-pause") as HTMLButtonElement;
const btn_reset: HTMLButtonElement = document.getElementById("btn-reset") as HTMLButtonElement;
// Digits
const digit_minutes: HTMLSpanElement = document.getElementById("digit-minutes") as HTMLSpanElement;
const digit_seconds: HTMLSpanElement = document.getElementById("digit-seconds") as HTMLSpanElement;
const digit_milliseconds: HTMLSpanElement = document.getElementById("digit-milliseconds") as HTMLSpanElement;
// 
const SECONDS = 1000;
const MINUTES = 60 * SECONDS;
const HOURS = 60 * MINUTES;
const DELAY = 10;
//
var time = 0;
var beforeTime: number;
var interval_id: number = NaN;


function setVisibleStartButton(visible: boolean) {
    if (visible) {
        btn_start.style.display = "block";
    } else {
        btn_start.style.display = "none";
    }
}

function setVisiblePauseButton(visible: boolean) {
    if (visible) {
        btn_pause.style.display = "block";
    } else {
        btn_pause.style.display = "none";
    }
}

function setVisibleContinueButton(visible: boolean) {
    if (visible) {
        btn_continue.style.display = "block";
    } else {
        btn_continue.style.display = "none";
    }
}

function setVisibleResetButton(visible: boolean) {
    if (visible) {
        btn_reset.style.display = "block";
    } else {
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
    var minutes: number = Math.floor((time % HOURS) / MINUTES);
    var seconds: number = Math.floor((time % MINUTES) / SECONDS);
    var milliseconds: number = time % 1000;


    digit_minutes.innerHTML = leftPad(minutes, 2) + ":";
    digit_seconds.innerHTML = leftPad(seconds, 2) + ".";
    digit_milliseconds.innerHTML = leftPad(milliseconds, 3);
    console.log("> " + leftPad(minutes, 2) +
        ":" + leftPad(seconds, 2) + "." + leftPad(milliseconds, 3));
}


function leftPad(value: number, lenght: number): string {
    var str: string = "" + value;
    var pad: string = ("0" as string).repeat(lenght);
    var ans = pad.substring(0, pad.length - str.length) + str
    return ans;
}

setVisiblePauseButton(false);
setVisibleResetButton(false);
setVisibleContinueButton(false);