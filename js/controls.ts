class Control {
    private btn_start: HTMLButtonElement = document.getElementById(
        "btn-start"
    ) as HTMLButtonElement;
    private btn_continue: HTMLButtonElement = document.getElementById(
        "btn-continue"
    ) as HTMLButtonElement;
    private btn_pause: HTMLButtonElement = document.getElementById(
        "btn-pause"
    ) as HTMLButtonElement;
    private btn_reset: HTMLButtonElement = document.getElementById(
        "btn-reset"
    ) as HTMLButtonElement;
    private btn_lap: HTMLButtonElement = document.getElementById(
        "btn-lap"
    ) as HTMLButtonElement;

    public onPlay() {
        this.reset();
        this.btn_pause.style.display = "block";
        this.btn_lap.style.display = "block";
    }

    public onReset() {
        this.reset();
        this.btn_start.style.display = "block";
    }

    public onPause() {
        this.reset();
        this.btn_continue.style.display = "block";
        this.btn_reset.style.display = "block";
    }

    private reset() {
        let buttons: HTMLCollectionOf<Element> =
            document.getElementsByClassName(
                "stopwatch-button"
            ) as HTMLCollectionOf<Element>;
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute("style", "display: none");
        }
    }
}
