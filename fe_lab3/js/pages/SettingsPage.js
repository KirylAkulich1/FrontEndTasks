import renderer from '../navigation/Renderer.js';
import { Button } from '../widgets/Button.js';
import {NavigationPage} from './NavigationPage.js';
import {RadioButtonGroupView} from '../widgets/RadioGroupView.js'

export class SettingsPage extends NavigationPage{
    settings
    durationRadioButtonGroup
    modeRadioButtonGroup
    dictionaryRadionButtonGroup

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

        console.log(this.settings);
    }
}