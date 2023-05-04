class LapTable {
    private container: HTMLElement;
    private tbody: HTMLElement;
    private laps: Array<Lap>;

    constructor() {
        this.laps = [];
        this.container = document.getElementById(
            "table-wrapper"
        ) as HTMLElement;

        this.tbody = document.getElementById("tbody-laps") as HTMLElement;
    }

    public lap(time: number) {
        let lastLapTime = 0;
        if (this.laps.length != 0) {
            lastLapTime = this.laps[this.laps.length - 1].end;
        }
        const new_lap: Lap = {
            start: lastLapTime,
            end: time,
        };
        this.laps.push(new_lap);
        this.insertLine(new_lap);
        if (this.container.style.display === "none" && this.laps.length > 0) {
            this.show(true);
        }
    }

    private insertLine(lap: Lap) {
        const tr = document.createElement("tr");
        tr.className = "lap";
        const position = document.createElement("td");
        tr.appendChild(position);
        position.innerHTML = this.laps.length.toString();
        const start_time = timeF(lap.start);
        const start_td = document.createElement("td");
        start_td.innerHTML = `${leftPad(start_time.minutes, 2)}:${leftPad(
            start_time.seconds,
            2
        )}:${leftPad(start_time.milliseconds, 3)}`;
        tr.appendChild(start_td);
        const end_td = document.createElement("td");
        const end_time = timeF(lap.end);
        end_td.innerHTML = `${leftPad(end_time.minutes, 2)}:${leftPad(
            end_time.seconds,
            2
        )}:${leftPad(end_time.milliseconds, 3)}`;
        tr.appendChild(end_td);
        this.tbody.prepend(tr);
    }

    show(v: boolean) {
        this.container.style.display = v ? "block" : "none";
    }

    reset() {
        this.laps = [];
        this.show(false);
        this.container.style.display = "none";
    }
}
