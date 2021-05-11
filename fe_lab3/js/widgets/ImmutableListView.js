import { View } from "./View.js";


export class ImmutableListView extends View{
    constructor(values,id){
        super();
        this.htmlView = document.getElementById(id);
        values.forEach(element => {
            const li = document.createElement('li');
            li.innerHTML  = element;
            this.htmlView.appendChild(li);
        });
    }
}