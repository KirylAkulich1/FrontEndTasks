import { NavigationPage } from "./NavigationPage.js";
import {CommandListView} from "../widgets/CommandList/CommandListView.js"
import {CommandListItem} from "../widgets/CommandList/CommandListItem.js"
import { Button } from "../widgets/Button.js";
import { Utils } from "../utils/Utils.js";

export class CommandListPage extends NavigationPage{
    commandList;
    addCommandButton;
    deleteCommandButton;
    startButton;
    async LoadPageAsync(){
        super.LoadPageAsync();
        await this.container.renderer.renderCommandsPageAsync();

        let appConfig = JSON.parse(window.localStorage.getItem('appConfig'));
        let commandIndexes = Utils.getRandomNumbers(appConfig.commands);

        let commandArray = await this.container.db.GetCommandNamesAsync(commandIndexes); 
        this.commandList = new CommandListView(this.container.idResolver.command_list,CommandListItem);
        this.commandList.AddRange(commandArray);


        this.addCommandButton = new Button(this.container.idResolver.add_command_button);
        this.addCommandButton.SetCommand(()=>this.commandList.AddCommandName('New Command'));

        this.deleteCommandButton = new Button(this.container.idResolver.delete_command_button);
        this.deleteCommandButton.SetCommand(()=>this.commandList.RemoveLastName());

        this.startButton = new Button(this.container.idResolver.start_game);
        this.startButton.SetCommand(()=>this.container.navigationService.navigateToGameProcessAsync());
        
    }
}