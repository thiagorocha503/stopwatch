
class Stopwatch {
    private time: number;
    private beforeTime;
    private interval_id;
    private display: Display;
    private constroller: Control;
    private table: LapTable;

    constructor(display: Display, controller: Control, table: LapTable) {
        this.time = 0;
        this.beforeTime = 0;
        this.interval_id = NaN;
        this.display = display;
        this.table = table;
        this.constroller = controller;
    }

    private clock() {
        let now = Date.now();
        let different = now - this.beforeTime;
        this.time += different;
        this.render();
        this.beforeTime = now;
    }

    public play() {
        if (isNaN(this.interval_id)) {
           
            this.beforeTime = Date.now();
            this.constroller.onPlay();
            this.interval_id = setInterval(() => {
                this.clock();
            }, DELAY);
        }
    }

    public pause() {
        if (!isNaN(this.interval_id)) {
            clearInterval(this.interval_id);
            this.interval_id = NaN;
            this.constroller.onPause();
        }
    }

    public continue() {
        this.play();

        this.constroller.onPlay();
    }

    public reset() {
        this.pause();
        this.time = 0;
        this.render();
        this.table.reset();
        this.constroller.onReset();
    }

    public lap() {
        this.table.lap(this.time);
    }

    private render() {
        let { minutes, seconds, milliseconds } = timeF(this.time);
        this.display.setTime(minutes, seconds, milliseconds);
    }
}
