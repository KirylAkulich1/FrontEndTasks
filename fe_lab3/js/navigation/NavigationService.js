import busyOverlayService from '../BusyOverlayService.js';
import renderer from './Renderer.js';

const urlList = {
    gameRules: "gamerules.html",
    commands: "commands.html",
    gameProc: "gameproc.html",
    home : "index.html",
    settings : "settings.html"
};


console.log("Fileloded");

class NavigationService{
    currentState
    currentUrl
    
    async navigateToGameRulesAsync(){
        
        await busyOverlayService.showWhileExecutingAsync(
            async () => {
                await renderer.renderGameRulesPageAsync();
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

    }

    navigateToPage(url){
        window.history.pushState(this.currentState,null,url)
    }

    OnPageResored(){

    }
}

console.log("Fileloded");
let navigationService = new NavigationService();

document.getElementById("navigation-gamerules").addEventListener("click",
    () => {return navigationService.navigateToGameRulesAsync()});
