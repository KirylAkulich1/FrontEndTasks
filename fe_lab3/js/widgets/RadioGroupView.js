import { View } from "./View.js"


export class RadioButtonGroupView extends View{
    onCheckListner
    onUnCheckListner

    constructor(name){
        super();
        document.querySelectorAll(`input[name="${name}"]`).forEach( (radioButton)=>{
            console.log(radioButton);
            radioButton.addEventListener('change',(button) => this.onChangeListner(button));
        });
    }

    onChangeListner(radioButton){
        console.log(this);
        if(radioButton.srcElement.checked){
            console.log('checked');
            if(this.onCheckListner != null)
            {
                this.onCheckListner(radioButton.srcElement.defaultValue);
            }
        }
        else{
            console.log('checked');
             if(this.onUnCheckListner != null){
                 this.onUnCheckListner(radioButton.srcElement.defaultValue);
             }
        }

    }
}