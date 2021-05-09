import { Button } from "../Button.js";
import { View } from "../View.js";



export class WordListItem extends View{

    deleteButton;
    updateButton;
    constructor(wordData){
        this.htmlView = document.createElement('tr');

        let wordColumnTextField = document.createElement('td');
        let wordTextField = document.createElement('input');
        wordTextField.value = wordData.word;

        wordColumnTextField.appendChild(wordTextField);
        this.htmlView.appendChild(wordColumnTextField);
        
         this.deleteButton = new Button();
         this.deleteButton.SetCommand(()=>
               this.container.busyOverlayservice.showWhileExecutingAsync(()=>this.OnDeletePressedAsync()));

         this.updateButton = new Button();
         this.updateButton.SetCommand(()=>
            this.container.busyOverlayservice.showWhileExecutingAsync(()=>this.OnUpdatePressed()));
        
        

    }

    async OnDeletePressedAsync(){
        this.container.db
    }

    async OnUpdatePressedAsync(){

    }
}