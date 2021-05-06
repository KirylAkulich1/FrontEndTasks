import { View } from "./View.js";


export class Timer extends View{
    view;
    timeout;
    handler;
    totalTime;
    timer;
    timeEndHandler;
    constructor(id,timeout,totalTime,onTickHandler,onTimeEndHandler){
        super();
        this.view = document.getElementById(id);
        this.handler = onTickHandler;
        this.timeEndHandler = onTimeEndHandler;
        this.timeout = timeout;
        this.totalTime = totalTime;
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
            this.view.innerHTML = seconds;
            this.handler();
        },this.timeout)
    }
    
    StopTimer(){
        if(this.timer != null){
            window.clearInterval(this.timer);
        }
    }
}