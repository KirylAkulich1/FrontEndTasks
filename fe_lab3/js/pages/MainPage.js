
import renderer from '../navigation/Renderer.js';
import { Button } from '../widgets/Button.js';
import {NavigationPage} from './NavigationPage.js';

export class MainPage extends NavigationPage {
    playButton
    async LoadPageAsync(){
        super.LoadPageAsync();
        await renderer.renderHomePageAsync();
        let appConfig = await this.container.db.GetAppConfigAsync();
        
        window.localStorage.setItem('appConfig',JSON.stringify(appConfig));
        console.log(appConfig);
        this.playButton = new Button(this.container.idResolver.play_button)
        this.playButton.SetCommand(()=>{ return this.container.navigationService.navigateToGameSettingsAsync();})

    }
}
