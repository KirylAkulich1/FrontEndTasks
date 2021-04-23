import {View} from './View.js'

const navigationBarPath = ''

class NavigationView extends View{
    navigationBar;
    
    async RenderAsync(){
        navBarCode = await fetch(navigationBarPath)
            .then(r=>r.text());
        container = document.getElementById('page-container');
        navigatinElement = View.htmlToElemt(navBarCode);
        container.appendChild(navigatinElement);
    }

    SetCommand(buttinId, command){
        button = document.getElementById(buttinId);
        button.onclick = command;
    }
}