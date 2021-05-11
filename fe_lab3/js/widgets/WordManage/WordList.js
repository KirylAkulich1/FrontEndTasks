import { Button } from "../Button.js";
import { DropDownView } from "../DropDownView.js";
import { View } from "../View.js";
import { WordListItem } from "./WordListItem.js";



export class WordList extends View{
    languageDropDownView;
    levelDropDownView;
    newCommandInputHtmlView;
    addButton;
    items = [];
    constructor(){
        super();
        this.htmlView = document.getElementById(this.container.idResolver.word_mange);

        this.languageDropDownView = new DropDownView(this.container.idResolver.admin_language_dropdown,['En','Ru'],()=> this.LoadWordsAsync());
        this.levelDropDownView = new DropDownView(this.container.idResolver.admin_level_dropdown,['Easy','Medium','Hard'],()=>this.LoadWordsAsync());
        
        this.newCommandInputHtmlView = document.getElementById(this.container.idResolver.admin_add_new_input);
        this.addButton = new Button(this.container.idResolver.admin_add_new_button);
        this.addButton.SetCommand(()=>this.container.busyOverlayservice.showWhileExecutingAsync(async ()=>
            {
                let word = await this.container.db.AddWordAsync(this.languageDropDownView.choosen,this.levelDropDownView.choosen,this.newCommandInputHtmlView.value);
                this.AddWord(word);
                this.newCommandInputHtmlView.value = "";
            }));
    }

    AddWord(wordToAdd){
        let listItem  = new WordListItem(wordToAdd,this.languageDropDownView.choosen,this.levelDropDownView.choosen);
        console.log(listItem);
        console.log(this.htmlView);
        this.htmlView.appendChild(listItem.htmlView);
        this.items.push(listItem);
    }

    async LoadWordsAsync(){
        const words = await this.container.db.LoadCollectionAsync(this.languageDropDownView.choosen,this.levelDropDownView.choosen);
        console.log(words);
        
        this.items.forEach(element=>{
            this.htmlView.removeChild(element.htmlView);
        })
        words.forEach(element => {
            this.AddWord(element);
        });
    }


}