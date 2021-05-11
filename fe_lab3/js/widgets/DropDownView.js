import { View } from "./View.js";



export class DropDownView extends View{
    htmlView;
    options;
    OnOptionChoosen;
    choosen;
    constructor(id,options,onChooseHandler){
        super();
        this.htmlView = document.getElementById(id);
        this.choosen = options[0];
        
        options.forEach(element => {
            let option = document.createElement('option');
            option.value = element;
            option.innerHTML = element;
            this.htmlView.appendChild(option);
        });

        this.options = options;
        this.OnOptionChoosen = onChooseHandler;
        this.htmlView.addEventListener('change',()=>{
            this.choosen= this.options[this.htmlView.selectedIndex]
            this.OnOptionChoosen(this.choosen)
        });
    }
}