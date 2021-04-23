const htmlFileslList = {
    gameRules: "./views/gamerules.html",
    commands: "./views/commands.html",
    gameProc: "./views/gameproc.html",
    home : "./views/index.html",
    settings : "./views/settings.html"
};


class PageRenderer{

    body;
    constructor(){
        this.body = null || document.querySelector('body')
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

    async loadViewFromFile(path){
        return await fetch(path)
                .then(r=>r.text())
    }

    insertViewToDocument(view){
        this.body.innerHTML = view
    }

}


const renderer = new PageRenderer();

export default renderer;
