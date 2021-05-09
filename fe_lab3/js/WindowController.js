import {container} from './Container.js'
import { LoginWindow } from './widgets/ModalWindow/LoginWindow.js';

class WindowController{
    navigationService

    constructor(){
        this.navigationService = container.navigationService;
        window.addEventListener('hashchange',this.OnHashChanged);
        window.addEventListener('popstate',this.OnPopStateAsync);
        window.addEventListener('load',this.OnWindowLoaded);
        window.addEventListener('locationchange', function(){
            console.log('location changed!');
        });
        document.onkeydown = this.OnKeyDownAsync;
      
    }
    
    OnHashChanged(event){
        console.log('Hash changed');
        if(window.location === 'gameproc.html'  && this.navigationService.currentState == undefined){
            this.navigationService.navigateToErrorPageAsync();
        }
        this.navigationService.currentUrl = window.location;
        container.logger.Log(this,window.location);
    }

    async OnPopStateAsync(e){
        console.log('pop');
        container.logger.Log(this,window.location);
        this.navigationService.currentState = e.state;
        this.navigationService = window.location.href;
        await this.navigationService.currentState.LoadPageAsync();
    }
    
    async OnWindowLoaded(e){
        console.log('load');
        container.logger.Log(this,window.location.pathname);
        container.navigationService.currentUrl = window.location.pathname;

        if(window.location == 'gameproc.html'  && container.navigationService.currentState == undefined){
            return container.navigationService.navigateToErrorPageAsync();
        }

        if(window.location.pathname == 'admin.html'){
            console.log('Try to navigate to admin');
            if(container.authService.user == null){
                this.navigationService.navigateToAdminPanelPageAsync();
                //let loginWindow = new LoginWindow();
                //await loginWindow.ShowWindowAsync();
            }
            return container.navigationService.navigateToAdminPanelPageAsync();
        }

        if((window.location.pathname === '/' ) && container.navigationService.currentState === undefined){
            return container.navigationService.navigateToHomePageAsync();
        }
    }

    async OnKeyDownAsync(evt){
        if (!evt) evt = event;
        if (evt.ctrlKey && evt.altKey && evt.keyCode == 9){ //CTRL+ALT+F4
        alert("CTRL+A"); 
        }
        else if (evt.shiftKey && evt.keyCode == 9){ //Shif+TAB
            alert("Shift+TAB");
            this.navigationService.navigateToAdminPanelPageAsync();
           // let loginWindow = new LoginWindow();
            //await loginWindow.ShowWindowAsync();
            }
    }
}


let windowController = new WindowController();