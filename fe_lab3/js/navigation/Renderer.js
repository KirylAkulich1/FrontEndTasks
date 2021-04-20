const htmlFileslList = {
    gameRules: "./views/gamerules.html",
    commands: "./views/commands.html",
    gameProc: "./views/gameproc.html",
    home : "./views/index.html",
    settings : "./views/settings.html"
}


class Renderer{

    body;
    constructor(){
        body = null || document.querySelector('body')
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
        body.innerHTML = view
    }
}


renderer = Renderer()

export default renderer
