import { View } from "./View.js";


export class Timer extends View{
    timeout;
    handler;
    totalTime;
    initTime;
    timer;
    timeEndHandler;
    constructor(id,timeout,totalTime,onTickHandler,onTimeEndHandler){
        super();
        this.htmlView = document.getElementById(id);
        this.handler = onTickHandler;
        this.timeEndHandler = onTimeEndHandler;
        this.timeout = timeout;
        this.totalTime = totalTime;
        this.initTime = totalTime;
    }
    StartTimer(){
        if(this.timer != null){
            this.StopTimer();
        }
        this.timer = window.setInterval(()=>{
            this.totalTime -= this.timeout;
            if(this.totalTime < 0){
                this.StopTimer();
                this.timeEndHandler();
            }
            let seconds = this.totalTime / 1000;
            this.htmlView.innerHTML = seconds;
            this.handler();
        },this.timeout)
    }
    
    StopTimer(){
        if(this.timer != null){
            window.clearInterval(this.timer);
        }
    }

    ResetTimer(){
        if(this.timer != null){
            window.clearInterval(this.timer);
            this.totalTime = this.initTime;
            this.htmlView.innerHTML  = this.initTime/1000;
        }
    }
}