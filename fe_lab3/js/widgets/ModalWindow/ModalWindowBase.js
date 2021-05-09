import { View } from "../View.js";
import { Button } from "../Button.js";

export class ModalWindowBase extends View{
    modalWindow;
    closeButton;
    constructor(){
        super();
        this.modalWindow = document.getElementById(this.container.idResolver.modal_window);
    }
    ShowWindow(){
        console.log('modal window showed');
        console.log(this.modalWindow);
        this.modalWindow.style.display= 'block'; 
        this.closeButton =new Button(this.container.idResolver.modal_window_close_button);
        this.closeButton.SetCommand(()=>this.Hide());
    }
    Hide(){
        this.modalWindow.style.display = 'none';
    }
}