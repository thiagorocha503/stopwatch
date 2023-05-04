class Display {
    private display: HTMLSpanElement = document.getElementById(
        "display"
    ) as HTMLSpanElement;

    public setTime(minutes: number, seconds: number, milliseconds: number) {
        this.display.innerHTML =
            leftPad(minutes, 2) +
            ":" +
            leftPad(seconds, 2) +
            "." +
            leftPad(parseFloat(milliseconds.toString().substring(0, 2)), 2);
    }
}
