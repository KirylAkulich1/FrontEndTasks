import {container} from '../Container.js'
const htmlFileslList = {
    gameRules: "./views/pages/gamerules.html",
    commands: "./views/pages/commands.html",
    gameProc: "./views/pages/gameproc.html",
    home : "./views/pages/homepage.html",
    settings : "./views/pages/settings.html"
};


export class PageRenderer{

    container;
    constructor(){
        this.container = null || document.getElementById('page-container');
    }
    async renderHomePageAsync(){
        this.insertViewToDocument(
            await this.loadViewFromFile(htmlFileslList.home)
        );
    }
    
    async renderSettingsPageAsync(){
        this.insertViewToDocument(
            await this.loadViewFromFile(htmlFileslList.settings)
        );
    }

    async renderCommandsPageAsync(){
        this.insertViewToDocument(
            await this.loadViewFromFile(htmlFileslList.commands)
        );
    }

    async renderGameProcessPageAsync(){
        this.insertViewToDocument(
            await this.loadViewFromFile(htmlFileslList.gameProc)
        );
    }

    async renderGameRulesPageAsync(){
        this.insertViewToDocument(
            await this.loadViewFromFile(htmlFileslList.gameRules)
        );
    }

    loadViewFromFile(path){
        return fetch(path)
                .then(r=>r.text());
    }

    insertViewToDocument(view){
        container.logger.Log(this,view);
        this.container.replaceWith( this.htmlToElemt(view));
        console.log(view);
    }

    htmlToElemt(html) {
        var template = document.createElement('template');
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        return template.content.firstChild;
    }

}


const renderer = new PageRenderer();

export default renderer;
