


export class GameController{
    wordsToGuess;
    scippedWords;
    guessedWords;

    constructor(wordsToGuess){
        this.wordsToGuess = wordsToGuess;
    }

    GuessWord(){
        console.log('word Guessed');
    }
    SkipWord(){
        console.log('word Skipped');
    }

    ShowGameProcess(){

    }

    ShowCommandResult(){

    }
}