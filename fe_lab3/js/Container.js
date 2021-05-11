import {NavigationService} from './navigation/NavigationService.js'
import {ConsoleLogger} from './Logger.js'
import {PageRenderer} from './navigation/Renderer.js'
import {IDResolver} from './IDContainer.js'
import { Database } from './data/Database.js';
import { AuthService } from './data/AuthService.js';
import busyOverlayService from './BusyOverlayService.js';

class Container{
    navigationService;
    logger;
    renderer;
    idResolver;
    db;
    authService;
    busyOverlayservice;
    constructor(){
        this.navigationService = new NavigationService();
        this.logger = new ConsoleLogger();
        this.renderer = new PageRenderer();
        this.idResolver = IDResolver;
        this.db = new Database();
        this.authService = new AuthService();
        this.busyOverlayservice = busyOverlayService
    }
}

export const container = new Container();