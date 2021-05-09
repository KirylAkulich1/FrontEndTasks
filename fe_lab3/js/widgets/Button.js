import {View} from './View.js'

export class Button extends View{
    constructor(buttonId){
        super()
        if(buttonId != undefined){
        this.htmlView = document.getElementById(buttonId);
        console.log(document.getElementById(buttonId));
        console.log(buttonId);
        }
        else{
            this.htmlView = document.createElement('button');
        }
    }

    SetCommand(command){
        this.htmlView.onclick = command;
    }
}