class Database{
    db;
    constructor(){
        var firebaseConfig = {
            apiKey: "AIzaSyAkamp3yqLvqJfuv3_ttT6BPKZHQZBznE0",
            authDomain: "jsaliasgame.firebaseapp.com",
            projectId: "jsaliasgame",
            storageBucket: "jsaliasgame.appspot.com",
            messagingSenderId: "411259658225",
            appId: "1:411259658225:web:b7c27c526f9a06c0f3ae50",
            measurementId: "G-BCRWX65H20"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          firebase.analytics();
          this.db = firebase.fire
    }
}