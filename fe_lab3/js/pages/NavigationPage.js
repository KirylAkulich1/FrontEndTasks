import {AbstactPage} from './Page.js';
import {NavigationView} from '../widgets/NavigationView.js';
import {container} from '../Container.js';
import renderer from '../navigation/Renderer.js';
import { GameHistoryModalView } from '../widgets/ModalWindow/GameHistoryModalView.js';

export class NavigationPage extends AbstactPage{
    navigationBar;
    async LoadPageAsync(){
        this.navigationBar = new NavigationView();
        await this.navigationBar.RenderAsync()
        
        this.navigationBar.SetCommand(
            'site-nav-view-to-index',() => {return container.navigationService.navigateToHomePageAsync();}
        );
        this.navigationBar.SetCommand(
            'site-nav-to-game-rules',()=> { return container.navigationService.navigateToGameRulesAsync();}
        );

        this.navigationBar.SetCommand(
            this.container.idResolver.navigate_game_history,
            async ()=>{
                const gameHistoryModalWindow = new GameHistoryModalView();
                await gameHistoryModalWindow.ShowModalAsync();
            }
        )
    }
}

export class StatelessPage extends NavigationPage{
    RestorePage(page){
        return
    }
}

export class GameRulesPage extends StatelessPage{
    async LoadPageAsync(){
        await super.LoadPageAsync();
        await renderer.renderGameRulesPageAsync();
    }
}