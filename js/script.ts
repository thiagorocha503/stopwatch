function $(func: Function) {
    window.addEventListener("load", () => func());
}

$(() => {
    const container: HTMLDivElement = document.getElementById(
        "table-wrapper"
    ) as HTMLDivElement;
    const tb: HTMLDivElement = document.getElementById(
        "table-lap"
    ) as HTMLDivElement;
    window.addEventListener("resize", (e) => {
        
        tb.style.height = container.style.height 
    });
    const table = new LapTable();
    const display = new Display();
    const controller = new Control();
    const app = new Stopwatch(display, controller, table);
    document
        .getElementById("btn-start")
        ?.addEventListener("click", () => app.play());
    document
        .getElementById("btn-continue")
        ?.addEventListener("click", () => app.continue());
    document
        .getElementById("btn-pause")
        ?.addEventListener("click", () => app.pause());
    document
        .getElementById("btn-reset")
        ?.addEventListener("click", () => app.reset());
    document
        .getElementById("btn-lap")
        ?.addEventListener("click", () => app.lap());
});
