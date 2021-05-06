

export class ModalWindow{
    modal;
    span;
    constructor(content){
        this.modal = document.getElementById('modal-window');
        this.span = document.getElementsByClassName("close")[0];
        
        this.span.onclick= e => this.modal.style.display = 'none';
        this.modal.innerHTML = content;
    }

    Show(){
        this.modal.style.display = 'block'   
    }

}