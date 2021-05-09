

export class AuthService{
    user;
    onSuccesLogin;
    onLoginFail;

    constructor(){
    }
    
    SetLisners(SuccesLoginHandler,LoginFailutureHandler){
        this.onSuccesLogin = SuccesLoginHandler;
        this.onLoginFail = LoginFailutureHandler;
    }
    
    async LoginUserAsync(email,password){
        console.log(email,password);
        this.user = await firebase.auth().signInWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        this.onSuccesLogin(userCredential.user);
                        return userCredential.user;
                    })
                    .catch((error) => {
                        this.onLoginFail(error);
                    });
    }

}