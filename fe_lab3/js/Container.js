import {NavigationService} from './navigation/NavigationService.js'
import {ConsoleLogger} from './Logger.js'
import {PageRenderer} from './navigation/Renderer.js'

class Container{
    navigationService;
    logger;
    renderer;
    
    constructor(){
        this.navigationService = new NavigationService();
        this.logger = new ConsoleLogger();
        this.renderer = new PageRenderer();
    }
}

export let container = new Container();