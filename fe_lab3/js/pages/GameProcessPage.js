import { GameController } from "../GameController.js";
import { SwipeGestureRecognizer } from "../SwipeGestureRecognizer.js";
import { Button } from "../widgets/Button.js";
import { Timer } from "../widgets/Timer.js";
import { AbstactPage } from "./Page.js";


export class GameProcessPage extends AbstactPage{
    timer;
    gameController;
    gerstureRecognizer;
    settings;
    skippedCount;
    guessedCount;
    wordToGuessSpan;
    async LoadPageAsync(settings){
        await this.container.renderer.renderGameProcessPageAsync();
        this.settings=settings;
        console.log(this.settings);

        this.timer = new Timer(this.container.idResolver.game_timer,1000,this.settings.duration* 1000,()=>{
            var audio = new Audio(
                'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
            if(this.timer.totalTime /1000 < 10){
                audio.play();
            }
        }, ()=>this.gameController.NextStepAsync());
        
        this.guessedCount = document.getElementById(this.container.idResolver.game_guessed_score);
        this.skippedCount = document.getElementById(this.container.idResolver.game_skipped_score);

        const guessedButton = new Button(this.container.idResolver.game_guessed_button);

        guessedButton.SetCommand(()=>this.gameController.GuessWord());
        this.wordToGuessSpan = document.getElementById(this.container.idResolver.game_word_to_guess);

        const teamName = document.getElementById(this.container.idResolver.team_name);

        this.gameController = new GameController(this.settings,(word) => this.UpdateGame(word),()=>{
            this.timer.ResetTimer();
            this.guessedCount.innerHTML = 0;
            this.skippedCount.innerHTML = 0;
            teamName.innerHTML = this.gameController.commandList[this.gameController.currendCommandIndx]; 
        });

        const startGameButton = new Button(this.container.idResolver.start_timer);
        
        startGameButton.SetCommand(async ()=>{
            await this.gameController.LoadCollectionAsync();
            teamName.innerHTML = this.gameController.commandList[this.gameController.currentCommandIndx];
            this.wordToGuessSpan.innerHTML = this.gameController.wordsToGuess[this.gameController.count];
            this.timer.StartTimer();});
        
        const stopTimerButton = new Button(this.container.idResolver.stop_timer);
        stopTimerButton.SetCommand(()=>this.timer.StopTimer());

        const skipButton = new Button(this.container.idResolver.skip_word);
        skipButton.SetCommand(()=>this.gameController.SkipWord());
        
        this.gerstureRecognizer = new SwipeGestureRecognizer(this.container.idResolver.page_container);
        this.gerstureRecognizer.OnSwipeUp = ()=>this.gameController.GuessWord();
        this.gerstureRecognizer.OnSwipeDown =() => this.gameController.SkipWord();
    }

    UpdateGame(word){
        this.guessedCount.innerHTML = this.gameController.guessedWords.length;
        this.skippedCount.innerHTML = this.gameController.skippedWords.length;
        this.wordToGuessSpan.innerHTML = word.word;
    }
}