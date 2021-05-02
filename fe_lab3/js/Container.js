import {NavigationService} from './navigation/NavigationService.js'
import {ConsoleLogger} from './Logger.js'
import {PageRenderer} from './navigation/Renderer.js'
import {IDResolver} from './IDContainer.js'

class Container{
    navigationService;
    logger;
    renderer;
    idResolver
    constructor(){
        this.navigationService = new NavigationService();
        this.logger = new ConsoleLogger();
        this.renderer = new PageRenderer();
        this.idResolver = IDResolver;
    }
}

export let container = new Container();