
export class AbstactPage{
    LoadPage(){throw new Error("Not implemented")}
    ResorePage(page){throw new Error("Not Implemented")}
    LoadPageAsync(){throw new Error("Not Implemented")}
}

export class SettingsPage extends AbstactPage{
    onRestorPage(page){
        return
    }
}

export class CommandListPage extends AbstactPage{
    onPageResored(page){
        return
    }
}
