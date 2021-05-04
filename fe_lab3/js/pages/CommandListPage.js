import { NavigationPage } from "./NavigationPage.js";

export class CommandListPage extends NavigationPage{
    async LoadPageAsync(){
        super.LoadPageAsync();
        await this.container.renderer.renderCommandsPageAsync();
    }
}