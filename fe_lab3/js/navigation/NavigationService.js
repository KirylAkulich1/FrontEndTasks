import busyOverlayService from '../BusyOverlayService.js';
import { CommandListPage } from '../pages/CommandListPage.js';
import {MainPage} from '../pages/MainPage.js';
import { GameRulesPage } from '../pages/NavigationPage.js';
import { SettingsPage } from '../pages/SettingsPage.js';


const urlList = {
    gameRules: "gamerules.html",
    commands: "commands.html",
    gameProc: "gameproc.html",
    home : "index.html",
    settings : "settings.html",
    error : "error.html"
};


export class NavigationService{
    currentState;
    currentUrl;
    
    async navigateToGameRulesAsync(){
                this.currentState = new GameRulesPage();
                this.navigateToPage(urlList.gameRules);
                await this.currentState.LoadPageAsync();
    }
    
    async navigateToGameSettingsAsync(){

        this.currentState = new SettingsPage();
        this.navigateToPage(urlList.settings)
        await this.currentState.LoadPageAsync();
    }

    async navigateToGameProcessAsync(){
    }

    async navigateToCommandListAsync(){
        console.log('Navigate to command list');
        this.currentState = new CommandListPage();
        this.navigateToPage(urlList.commands);
        await this.currentState.LoadPageAsync();
    }

    async navigateToHomePageAsync(){
                this.currentState = new MainPage();
                this.navigateToPage(urlList.home);
                await this.currentState.LoadPageAsync();
    }

    async navigateToErrorPageAsync(){

    }

    navigateToPage(url){
        window.history.pushState({},null,url)
    }


}

console.log("Fileloded");
export let navigationService = new NavigationService();

