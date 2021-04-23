import {NavigationService} from './navigation/NavigationService.js'

class Container{
    navigationService;
    constructor(){
        this.navigationService = new NavigationService()
    }
}

let container = new Container();