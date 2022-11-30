

class Stopwatch{

    private time: number;
    private beforeTime;
    private interval_id;
    private display: Display;
    private constroller: Control;

    constructor(display: Display, controller: Control){
        this.time = 0;
        this.beforeTime = 0;
        this.interval_id = NaN;
        this.display = display;
        this.constroller = controller;     
    }
    
    private clock(){
        let now = Date.now();
        let different = now - this.beforeTime;
        this.time += different;
        this.render();
        this.beforeTime = now;
    }

    public play(){
        if (isNaN(this.interval_id)) {
            this.beforeTime = Date.now();
            this.constroller.onPlay()
            this.interval_id = setInterval(()=>{
                this.clock();
            }, DELAY);         
        }
    }

    public pause(){
        if (!isNaN(this.interval_id)) {
            clearInterval(this.interval_id);
            this.interval_id = NaN;
            this.constroller.onPause()
        }
    }

    public continue(){
        this.play()
        this.constroller.onPlay()
    }

    public reset(){
        this.pause();
        this.time = 0;
        this.render();
        this.constroller.onReset()
    }

    private render(){
        let minutes: number = Math.floor((this.time % HOURS) / MINUTES);
        let seconds: number = Math.floor((this.time % MINUTES) / SECONDS);
        let milliseconds: number = this.time % 1000;
        this.display.setTime(minutes, seconds, milliseconds);
    }

}