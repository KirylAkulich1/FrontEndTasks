
import {container} from './Container.js';
import { CommandResultWindow } from "./widgets/ModalWindow/CommandResultWindow.js";


export class GameController{
    wordsToGuess;
    skippedWords=[];
    guessedWords=[];
    commandScore=[];
    count;
    onWordChanged;
    currentCommandIndx;
    commandList;
    settings;
    onTurnEnd;
    constructor(settings,onWordChangedHandler,onTurnEndHandler){
        this.settings = settings;
        this.onWordChanged = onWordChangedHandler;
        this.count = 0;
        this.currentCommandIndx = 0 ;
        this.commandList = settings.commands;
        this.onTurnEnd = onTurnEndHandler;
    }

    GuessWord(){
        const next= this.GetNextWord();
        if(next == undefined){
            return this.NextStepAsync();
        }
        this.guessedWords.push(next);
        this.onWordChanged(next);
    }
    SkipWord(){
        const next = this.GetNextWord();
        if(next == undefined){
            return this.NextStepAsync();
        }
        this.skippedWords.push(next);
        this.onWordChanged(next);
    }

    async ShowCommandResultAsync(){
        const modalWindow = new CommandResultWindow();

        if(this.currentCommandIndx == this.commandList.length-1){
            modalWindow.closeButton.SetCommand(()=>{
                modalWindow.Hide();
                const max = this.commandScore.reduce((a,b)=>a.score > b.score ? a : b);
                alert(`Winner is ${max.command}. Score : ${max.score}`);
                const gameHistory = JSON.parse(localStorage.getItem('gameHistory'));
                if(gameHistory == undefined){
                    gameHistory = [];
                }
                var today = new Date();
                
                today = parseInt(today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear()+"\nTime : "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
                gameHistory.push({
                    currentDate : today,
                    winner : max.command,
                    points : max.score
                });
                localStorage.setItem('gameHistory',JSON.stringify(gameHistory));

                return container.navigationService.navigateToHomePageAsync();
            });
        }

        await modalWindow.ShowWindowAsync({
            guessedWords : this.guessedWords,
            skippedWords  :this.skippedWords,
            commandResult : this.guessedWords.length,
            commandName : this.commandList[this.currentCommandIndx]
        });
    }


    async NextStepAsync(){
        this.onTurnEnd();
        this.commandScore.push({command:this.commandList[this.currentCommandIndx],score : this.guessedWords.length});
        await this.ShowCommandResultAsync();
        this.currentCommandIndx++;
        this.guessedWords = [];
        this.skippedWords= [];
        this.count = 0;

    }

    async LoadCollectionAsync(){
        const words = await container.db.LoadCollectionAsync(this.settings.dictionary,this.settings.mode);
        this.wordsToGuess = words;
    }

    GetNextWord(){
        if(this.wordsToGuess.length == this.count){
            return undefined;
        }
        else{
            return this.wordsToGuess[this.count++];
        }
    }

}