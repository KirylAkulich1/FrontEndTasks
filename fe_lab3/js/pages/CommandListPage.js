import { NavigationPage } from "./NavigationPage.js";
import {CommandListView} from "../widgets/CommandList/CommandListView.js"
import {CommandListItem} from "../widgets/CommandList/CommandListItem.js"
import { Button } from "../widgets/Button.js";

export class CommandListPage extends NavigationPage{
    commandList;
    addCommandButton;
    deleteCommandButton;
    async LoadPageAsync(){
        super.LoadPageAsync();
        await this.container.renderer.renderCommandsPageAsync();
       
        this.commandList = new CommandListView(this.container.idResolver.command_list,CommandListItem);
        this.addCommandButton = new Button(this.container.idResolver.add_command_button);
        this.addCommandButton.SetCommand(()=>this.commandList.AddCommandName('New Command'));

        this.deleteCommandButton = new Button(this.container.idResolver.delete_command_button);
        this.deleteCommandButton.SetCommand(()=>this.commandList.RemoveLastName());
    }
}