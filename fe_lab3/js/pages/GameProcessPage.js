import { GameController } from "../GameController.js";
import { SwipeGestureRecognizer } from "../SwipeGestureRecognizer.js";
import { Button } from "../widgets/Button.js";
import { Timer } from "../widgets/Timer.js";
import { AbstactPage } from "./Page.js";


export class GameProcessPage extends AbstactPage{
    timer;
    startGameButton;
    stopTimerButton;
    gameController;
    gerstureRecognizer;
    async LoadPageAsync(){
        await this.container.renderer.renderGameProcessPageAsync();

        this.timer = new Timer(this.container.idResolver.game_timer,1000,90000,()=>{},()=>{this.gameController.ShowCommandResult()});
        
        this.gameController = new GameController([]);

        this.startGameButton = new Button(this.container.idResolver.start_timer);
        this.startGameButton.SetCommand(()=>{this.timer.StartTimer()});

        this.stopTimerButton = new Button(this.container.idResolver.stop_timer);
        this.stopTimerButton.SetCommand(()=>this.timer.StopTimer());
        
        this.gerstureRecognizer = new SwipeGestureRecognizer(this.container.idResolver.page_container);
        this.gerstureRecognizer.OnSwipeUp = ()=>this.gameController.GuessWord();
        this.gerstureRecognizer.OnSwipeDown =() => this.gameController.SkipWord();
    }
}