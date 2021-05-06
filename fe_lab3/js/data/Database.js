export class Database{
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
          console.log('App initialized');
          firebase.analytics();
          this.db = firebase.firestore();
    }

    GetAppConfigAsync(){
        let docRef = this.db.collection('app').doc('config');
        return docRef
                .get()
                .then((doc)=> doc.data())
                .catch((error) => {
                    console.log("Error getting cached document:", error);
                });
    }

    GetCommandNamesAsync(indexArray){
        let commandsRef = this.db.collection('command_names').where('index','in',indexArray);
        return commandsRef
        .get()
        .then((querySnapshot)=>{
            let commands = [];
            querySnapshot.forEach((doc)=>commands.push(doc.data().name));
            return commands;
        });
    }
}