class AbstactPage{
    onPageLoaded(){throw new Error("Not implemented")}
    onPageResored(page){throw new Error("Not Implemented")}
}


class StatelessPage extends AbstactPage{
    onPageResored(page){
        return
    }
}

class SettingsPage extends AbstactPage{
    onPageResored(page){
        return
    }
}

class CommandListPage extends AbstactPage{
    onPageResored(page){
        return
    }
}

