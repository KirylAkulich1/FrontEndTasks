import { View } from "../View.js";


export class CommandListItem{
    html_code = '<input class="underscored" placeholder="team1"/>';
    html_elemet;
    html_input;
    command_name;
    constructor(placeholder){
        this.html_elemet = document.createElement('li');
        this.html_input = View.htmlToElemt(this.html_code);
        this.html_input.placeholder = placeholder;
        this.html_elemet.appendChild(this.html_input);
        this.html_elemet.addEventListener('change',(event)=>this.command_name = event.target.value);
        console.log(this.html_elemet)
    }
}