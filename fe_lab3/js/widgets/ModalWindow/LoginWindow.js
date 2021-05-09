
import { View } from "../View.js";
import { ModalWindowBase } from "./ModalWindowBase.js";


export class LoginWindow extends ModalWindowBase{
    form;
    emailField;
    passwordField;
    submitButton;
    constructor(){
        super();
    }
    async ShowWindowAsync(completionCommand){
        super.ShowWindow();
        let htmlCode=await fetch("./views/pages/loginpage.html")
            .then(r => r.text());
        document.getElementById(this.container.idResolver.modal_window_body).replaceWith( View.htmlToElemt(htmlCode));

        this.container.authService.SetLisners(
            (user) => {this.Hide(); this.container.navigationService.navigateToAdminPanelPageAsync();},
            (error) => alert(error.message)
        );
        
        this.form = document.getElementById('login-form');
        this.emailField = this.form.elements.user;
        this.passwordField = this.form.elements.pass;
        this.submitButton = this.form.elements.login;
        console.log(this);
        this.submitButton.addEventListener("click", (e)=>{
            e.preventDefault();
            this.container.authService.LoginUserAsync(this.emailField.value,this.passwordField.value);
        });
    }
}