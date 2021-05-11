import { View } from "../View.js";


export class CommandListView extends View{
    itemsCollection;
    htmlListView;
    itemType;
    commandNames=[];
    constructor(id,itemType){
        super();
        this.itemsCollection = [];
        this.itemType = itemType;
        this. htmlListView = document.getElementById(id);
    }

    RemoveLastName(){
        let last_item = this.itemsCollection.pop();
        this.htmlListView.removeChild(last_item.html_elemet);
        this.commandNames.pop();
    }

    AddCommandName(commandName){
        this.commandNames.push(commandName);
        let itemToPush = new this.itemType(commandName);
        this.itemsCollection.push(itemToPush);
        console.log(itemToPush);
        console.log(this.htmlListView);
        this.htmlListView.appendChild(itemToPush.html_elemet);
    }

    AddRange(range){
        console.log(range);
        range.forEach(item=> this.AddCommandName(item));
    }
}