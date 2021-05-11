import { Button } from "../Button.js";
import { View } from "../View.js";



export class WordListItem extends View{

    deleteButton;
    updateButton;
    wordData;
    wordTextField;
    lang;
    level;
    constructor(wordData,lang,level){
        super();
        this.parent = parent;

        this.lang = lang;
        this.level = level;

        this.htmlView = document.createElement('tr');
        this.wordData = wordData;
        const wordColumnTextField = document.createElement('td');
        this.wordTextField = document.createElement('input');

        this.wordTextField.value = wordData.word;
        this.wordTextField.className = 'underscored'

        wordColumnTextField.appendChild(this.wordTextField);
        this.htmlView.appendChild(wordColumnTextField);
        
        const deleteButtonCol = document.createElement('td');
         this.deleteButton = new Button();
         this.deleteButton.SetCommand(()=>
               this.container.busyOverlayservice.showWhileExecutingAsync(()=>this.OnDeletePressedAsync()));
        deleteButtonCol.appendChild(this.deleteButton.htmlView);

        this.deleteButton.htmlView.innerHTML = "Delete";
        this.deleteButton.htmlView.className ='destructive';

        const blankCol = document.createElement('td');
        this.htmlView.appendChild(blankCol);

        const updateButtonCol = document.createElement('td');
         this.updateButton = new Button();
         this.updateButton.SetCommand(()=>
            this.container.busyOverlayservice.showWhileExecutingAsync(()=>this.OnUpdatePressedAsync()));
        
        this.updateButton.htmlView.innerHTML = "Update";
        this.updateButton.htmlView.className = "update";

        updateButtonCol.appendChild(this.updateButton.htmlView);
        this.htmlView.appendChild(updateButtonCol);
        this.htmlView.appendChild(deleteButtonCol);
        

    }

    async OnDeletePressedAsync(){
        console.log(this.wordData);
        await this.container.db.DeleteWordAsync(this.lang,this.level,this.wordData);
        this.htmlView.parentElement.removeChild(this.htmlView);
    }

    async OnUpdatePressedAsync(){
        this.wordData.word = this.wordTextField.value;
        await this.container.db.UpdateWordAsync(this.lang,this.level,this.wordData);

    }
}