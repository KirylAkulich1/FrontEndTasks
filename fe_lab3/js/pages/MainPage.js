
import renderer from '../navigation/Renderer.js';
import {NavigationPage} from './NavigationPage.js';

export class MainPage extends NavigationPage {
    async LoadPageAsync(){
        super.LoadPageAsync()
        await renderer.renderHomePageAsync();
    }
}
