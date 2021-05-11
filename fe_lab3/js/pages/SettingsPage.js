import renderer from '../navigation/Renderer.js';
import { Button } from '../widgets/Button.js';
import {NavigationPage} from './NavigationPage.js';
import {RadioButtonGroupView} from '../widgets/RadioGroupView.js'

export class SettingsPage extends NavigationPage{
    settings
    durationRadioButtonGroup
    modeRadioButtonGroup
    dictionaryRadionButtonGroup
    toCommandListButton
    async LoadPageAsync(){
        super.LoadPageAsync();
        await renderer.renderSettingsPageAsync();

        this.settings = {};
        this.durationRadioButtonGroup = new RadioButtonGroupView('duration');
        this.durationRadioButtonGroup.onCheckListner = (value) =>{
            this.settings.duration = parseInt(value);
        }

        this.modeRadioButtonGroup = new RadioButtonGroupView('mode');
        this.modeRadioButtonGroup.onCheckListner = (value) =>{
            this.settings.mode = value;
        }

        this.dictionaryRadionButtonGroup = new RadioButtonGroupView('dictionary');
        this.dictionaryRadionButtonGroup.onCheckListner = (value) =>{
            this.settings.dictionary = value;
        }

        this.toCommandListButton = new Button(this.container.idResolver.to_commands_button);
        this.toCommandListButton.SetCommand(()=> {
            if(this.ValidateSettings())
                this.container.navigationService.navigateToCommandListAsync(this.settings);
            else
                alert('Please, choose all options');});
    }


    ValidateSettings(){
        return 'duration' in this.settings
            && 'mode' in this.settings
            && 'dictionary' in this.settings
    }
}