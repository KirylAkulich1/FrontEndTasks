class AbstactPage{
    LoadPage(){throw new Error("Not implemented")}
    ResorePage(page){throw new Error("Not Implemented")}
    LoadPageAsync(){throw new Error("Not Implemented")}
}

class StatelessPage extends NavigationPage{
    RestorePage(page){
        return
    }
}

class SettingsPage extends AbstactPage{
    onRestorPage(page){
        return
    }
}

class CommandListPage extends AbstactPage{
    onPageResored(page){
        return
    }
}
