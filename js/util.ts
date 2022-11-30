const SECONDS: number = 1000;
const MINUTES: number = 60 * SECONDS;
const HOURS: number = 60 * MINUTES;
const DELAY: number = 10;

function $(func: Function){
    window.addEventListener("load", ()=> func());
}

function leftPad(value: number, lenght: number): string {
    var str: string = "" + value;
    var pad: string = ("0" as string).repeat(lenght);
    var ans = pad.substring(0, pad.length - str.length) + str
    return ans;
}
