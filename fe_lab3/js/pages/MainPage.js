
import renderer from '../navigation/Renderer.js';
import { Button } from '../widgets/Button.js';
import {NavigationPage} from './NavigationPage.js';

export class MainPage extends NavigationPage {
    playButton
    async LoadPageAsync(){
        super.LoadPageAsync();
        await renderer.renderHomePageAsync();

                
        this.playButton = new Button(this.container.idResolver.play_button)
        this.playButton.SetCommand(()=>{ return this.container.navigationService.navigateToGameSettingsAsync();})

    }
}
