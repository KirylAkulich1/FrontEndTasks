import {View} from './View.js'

export class Button extends View{
    view 
    constructor(buttonId){
        super()
        this.view = document.getElementById(buttonId);
        console.log(document.getElementById(buttonId))
        console.log(buttonId)
    }

    SetCommand(command){
        this.view.onclick = command;
    }
}