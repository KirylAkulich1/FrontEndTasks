import {container} from '../Container.js';
export class View{
    container;
    htmlView;
    constructor(){
        this.container = container;
    }
    Render(){return}
    Hide() {return}
    Show() {return}
    RenderAsync(){return}
    
    SetBackground(color){

    }

    static htmlToElemt(html) {
        var template = document.createElement('template');
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        return template.content.firstChild;
    }
}