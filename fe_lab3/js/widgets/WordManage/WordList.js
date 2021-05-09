import { DropDownView } from "../DropDownView.js";
import { View } from "../View.js";



export class WordList extends View{
    languageDropDownView;
    levelDropDownView;
    constructor(){
        super();
        this.htmlView = document.getElementById(this.container.idResolver.word_mange);
        
        this.languageDropDownView = new DropDownView(this.container.idResolver.admin_language_dropdown,['En,Ru'],()=> console.log('language changed'));
        this.levelDropDownView = new DropDownView(this.container.idResolver.admin_level_dropdown,['Easy,Medium,Hard'],()=>console.log('level changed'));


    }

}