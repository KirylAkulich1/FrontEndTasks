import { View } from "./View.js";



export class DropDownView extends View{
    htmlView;
    options;
    OnOptionChoosen;
    constructor(id,options,onChooseHandler){
        super();
        this.htmlView = document.getElementById(id);
        options.array.forEach(element => {
            let option = document.createElement('option');
            option.value = element;
            option.innerHTML = element;
            this.htmlView.appendChild(option);
        });
        this.htmlView.addEventListener('change',()=>this.OnOptionChoosen(this.options[this.htmlView.selectedIndex]));
    }
}