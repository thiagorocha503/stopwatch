$(() => {
    const display = new Display();
    const controller = new Control();
    const app = new Stopwatch(display, controller);
    document.getElementById("btn-start")?.addEventListener("click", ()=> app.play())
    document.getElementById("btn-continue")?.addEventListener("click", ()=> app.continue())
    document.getElementById("btn-pause")?.addEventListener("click", ()=> app.pause())
    document.getElementById("btn-reset")?.addEventListener("click", ()=> app.reset())
})
