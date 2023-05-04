const SECONDS: number = 1000;
const MINUTES: number = 60 * SECONDS;
const HOURS: number = 60 * MINUTES;
const DELAY: number = 10;

function leftPad(value: number, lenght: number): string {
    var str: string = "" + value;
    var pad: string = ("0" as string).repeat(lenght);
    var ans = pad.substring(0, pad.length - str.length) + str;
    return ans;
}

function timeF(time: number): {
    minutes: number;
    seconds: number;
    milliseconds: number;
} {
    return {
        minutes: Math.floor((time % HOURS) / MINUTES),
        seconds: Math.floor((time % MINUTES) / SECONDS),
        milliseconds: time % 1000,
    };
}
