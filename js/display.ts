class Display {

    private digit_minutes: HTMLSpanElement = document.getElementById("digit-minutes") as HTMLSpanElement;
    private digit_seconds: HTMLSpanElement = document.getElementById("digit-seconds") as HTMLSpanElement;
    private digit_milliseconds: HTMLSpanElement = document.getElementById("digit-milliseconds") as HTMLSpanElement;

    public setTime(minutes: number, seconds: number, milliseconds: number) {
        this.digit_minutes.innerHTML = leftPad(minutes, 2) + ":";
        this.digit_seconds.innerHTML = leftPad(seconds, 2) + ".";
        this.digit_milliseconds.innerHTML = leftPad(milliseconds, 3);
    }

}