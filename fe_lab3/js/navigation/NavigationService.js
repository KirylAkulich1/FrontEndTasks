import busyOverlayService from '../BusyOverlayService.js';
import {MainPage} from '../pages/MainPage.js'


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
    currentState
    currentUrl
    
    async navigateToGameRulesAsync(){
        
        await busyOverlayService.showWhileExecutingAsync(
            async () => {
                this.navigateToPage(urlList.gameRules);
            }
        );
    }
    
    async navigateToGameSettingsAsync(){

    }

    async navigateToGameProcessAsync(){

    }

    async navigateToCommandListAsync(){

    }

    async navigateToHomePageAsync(){
        await busyOverlayService.showWhileExecutingAsync(
            async ()=>{
                this.navigateToPage(urlList.home);
                this.currentState = new MainPage();
                await this.currentState.LoadPageAsync();
            }
        )
    }

    async navigateToErrorPageAsync(){

    }

    navigateToPage(url){
        window.history.pushState(this.currentState,null,url)
    }


}

console.log("Fileloded");
export let navigationService = new NavigationService();

