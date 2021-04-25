import {View} from './View.js'

const navigationBarPath = './views/widgets/navigationPanel.html'

export class NavigationView extends View{
    navigationBar;
    
    async RenderAsync(){
        let navBarCode = await fetch(navigationBarPath)
            .then(r=>r.text());
        console.log(navBarCode);
        let container = document.getElementById('site-navigation-bar');
        let navigatinElement = View.htmlToElemt(navBarCode);
        container.replaceWith(navigatinElement);
    }

    SetCommand(buttinId, command){
        let button = document.getElementById(buttinId);
        button.onclick = command;
    }
}