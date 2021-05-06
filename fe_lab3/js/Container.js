import {NavigationService} from './navigation/NavigationService.js'
import {ConsoleLogger} from './Logger.js'
import {PageRenderer} from './navigation/Renderer.js'
import {IDResolver} from './IDContainer.js'
import { Database } from './data/Database.js';

class Container{
    navigationService;
    logger;
    renderer;
    idResolver;
    db;
    constructor(){
        this.navigationService = new NavigationService();
        this.logger = new ConsoleLogger();
        this.renderer = new PageRenderer();
        this.idResolver = IDResolver;
        this.db = new Database();
    }
}

export let container = new Container();