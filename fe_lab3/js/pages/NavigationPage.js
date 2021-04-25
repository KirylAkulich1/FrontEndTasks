import {AbstactPage} from './Page.js';
import {NavigationView} from '../widgets/NavigationView.js';
import {container} from '../Container.js';

export class NavigationPage extends AbstactPage{
    navigationBar;
    async LoadPageAsync(){
        this.navigationBar = new NavigationView();
        await this.navigationBar.RenderAsync()
        
        this.navigationBar.SetCommand(
            'site-nav-view-to-index',container.navigationService.navigateToHomePageAsync
        );
        this.navigationBar.SetCommand(
            'site-nav-to-game-rules',container.navigationService.navigateToGameRulesAsync
        );
    }
}

export class StatelessPage extends NavigationPage{
    RestorePage(page){
        return
    }
}