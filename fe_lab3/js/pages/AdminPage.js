import { navigationService } from '../navigation/NavigationService.js';
import { LoginWindow } from '../widgets/ModalWindow/LoginWindow.js';
import { WordList } from '../widgets/WordManage/WordList.js';
import { NavigationPage } from './NavigationPage.js';
import {AbstactPage} from './Page.js';

export class AdminPage extends NavigationPage{
    wordTable;
    async LoadPageAsync(){
        super.LoadPageAsync();
        await this.container.renderer.renderAdminPanelPageAsync();
        if(true){
            await navigationService.navigateToErrorPageAsync();
        }
        else{
            await this.container.renderer.renderAdminPanelPageAsync();
        }

        this.wordTable = new WordList();
        await this.wordTable.LoadWordsAsync();
    }
}