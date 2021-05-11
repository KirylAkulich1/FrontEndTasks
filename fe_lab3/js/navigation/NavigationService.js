import busyOverlayService from '../BusyOverlayService.js';
import { AdminPage } from '../pages/AdminPage.js';
import { CommandListPage } from '../pages/CommandListPage.js';
import { GameProcessPage } from '../pages/GameProcessPage.js';
import {MainPage} from '../pages/MainPage.js';
import { GameRulesPage } from '../pages/NavigationPage.js';
import { SettingsPage } from '../pages/SettingsPage.js';


const urlList = {
    gameRules: "gamerules.html",
    commands: "commands.html",
    gameProc: "gameproc.html",
    home : "index.html",
    settings : "settings.html",
    error : "error.html",
    admin : "admin.html"
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

    async navigateToGameProcessAsync(settings){
        console.log('Navigate to game proc');
        this.currentState = new GameProcessPage();
        this.navigateToPage(urlList.gameProc);
        await this.currentState.LoadPageAsync(settings);
    }

    async navigateToCommandListAsync(settings){
        console.log('Navigate to command list');
        this.currentState = new CommandListPage();
        this.navigateToPage(urlList.commands);
        await this.currentState.LoadPageAsync(settings);
    }

    async navigateToHomePageAsync(){
                this.currentState = new MainPage();
                this.navigateToPage(urlList.home);
                await this.currentState.LoadPageAsync();
    }

    async navigateToErrorPageAsync(){

    }

    async navigateToAdminPanelPageAsync(){
        this.currentState = new AdminPage();
        this.navigateToPage(urlList.admin);
        await this.currentState.LoadPageAsync();
    }

    GoBack(){
        window.history.back();
    }
    navigateToPage(url){
        window.location.hash = url;
    }


}

console.log("Fileloded");
export let navigationService = new NavigationService();

