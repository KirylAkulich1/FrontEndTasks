export class Database{
    db;
    constructor(){
        
          console.log('App initialized');
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