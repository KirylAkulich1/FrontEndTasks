import busyOverlayService from '../BusyOverlayService.js';
import {MainPage} from '../pages/MainPage.js';
import { GameRulesPage } from '../pages/NavigationPage.js';


const urlList = {
    gameRules: "gamerules.html",
    commands: "commands.html",
    gameProc: "gameproc.html",
    home : "index.html",
    settings : "settings.html",
    error : "error.html"
};


console.log("Fileloded");

export class NavigationService{
    currentState;
    currentUrl;
    
    async navigateToGameRulesAsync(){
                this.currentState = new GameRulesPage();
                this.navigateToPage(urlList.gameRules);
                await this.currentState.LoadPageAsync();
    }
    
    async navigateToGameSettingsAsync(){

    }

    async navigateToGameProcessAsync(){

    }

    async navigateToCommandListAsync(){

    }

    async navigateToHomePageAsync(){
                this.currentState = new MainPage();
                this.navigateToPage(urlList.home);
                await this.currentState.LoadPageAsync();
    }

    async navigateToErrorPageAsync(){

    }

    navigateToPage(url){
        window.history.pushState(this.currentState,null,url)
    }


}

console.log("Fileloded");
export let navigationService = new NavigationService();

