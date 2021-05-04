import {container} from '../Container.js';
export class AbstactPage{
    container
    constructor(){
        this.container = container
    }
    LoadPage(){throw new Error("Not implemented")}
    ResorePage(page){throw new Error("Not Implemented")}
    LoadPageAsync(){throw new Error("Not Implemented")}
}

