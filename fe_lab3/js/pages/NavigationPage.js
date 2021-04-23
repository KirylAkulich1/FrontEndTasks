import {AbstactPage} from './Page'
import {NavigationView} from '../widgets/NavigationView'
import {container} from '../Container.js'

class NavigationPage extends AbstactPage{
    navigationBar;
    async LoadPageAsync(){
        this.navigationBar = new NavigationView();
        await this.navigationBar.RenderAsync()
        
        this.navigationBar.SetCommand(
            'site-nav-to-index',container.navigationService.navigateToHomePageAsync
        );
        this.navigationBar.SetCommand(
            'site-nav-to-game-rules',container.navigationBar.navigateToGameRulesAsync
        );
    }
}