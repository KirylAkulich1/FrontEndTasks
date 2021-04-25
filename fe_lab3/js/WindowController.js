import {container} from './Container.js'

class WindowController{
    navigationService

    constructor(){
        this.navigationService = container.navigationService;
        window.addEventListener('hashchange',this.OnHashChanged);
        window.addEventListener('popstate',this.OnPopStateAsync);
        window.addEventListener('load',this.OnWindowLoaded);
    }
    
    OnHashChanged(event){
        if(window.location === 'gameproc.html'  && this.navigationService.currentState == undefined){
            this.navigationService.navigateToErrorPageAsync();
        }
        this.navigationService.currentUrl = window.location;
        container.logger.Log(this,window.location);
    }

    async OnPopStateAsync(e){
        this.navigationService.currentState = e.state;
        this.navigationService = window.location.href;
        await this.navigationService.currentState.LoadPageAsync();
    }
    
    OnWindowLoaded(e){
        container.logger.Log(this,window.location.pathname);
        container.navigationService.currentUrl = window.location.pathname;

        if(window.location === 'gameproc.html'  && container.navigationService.currentState == undefined){
            return container.navigationService.navigateToErrorPageAsync();
        }

        if((window.location.pathname === '/' ) && container.navigationService.currentState === undefined){
            return container.navigationService.navigateToHomePageAsync();
        }
    }
}


let windowController = new WindowController();