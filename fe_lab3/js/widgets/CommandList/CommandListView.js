import { View } from "../View.js";


export class CommandListView extends View{
    itemsCollection;
    htmlListView;
    itemType;
    
    constructor(id,itemType){
        super();
        this.itemsCollection = [];
        this.itemType = itemType;
        this. htmlListView = document.getElementById(id);
    }

    RemoveLastName(){
        let last_item = this.itemsCollection.pop();
        this.htmlListView.removeChild(last_item.html_elemet);
    }

    AddCommandName(commandName){
        let itemToPush = new this.itemType(commandName);
        this.itemsCollection.push(itemToPush);
        console.log(itemToPush);
        console.log(this.htmlListView);
        this.htmlListView.appendChild(itemToPush.html_elemet);
    }
}