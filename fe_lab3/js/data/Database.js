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
    async AddWordAsync(eng,level,insertWord){
        let wordToAdd = {word:insertWord,random:Math.random()};
        return  this.db.collection(`words/${eng}/${level}`)
        .add(wordToAdd)
        .then(ref=>{
            wordToAdd.id = ref.id;
            console.log(wordToAdd);
            return wordToAdd});
        
    }

    async LoadCollectionAsync(leng,level){
        return this.db.collection(`words/${leng}/${level}`)
        .get()
        .then((snaphot)=>{
            const data = snaphot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data(),
            }))
            return data;
        })
    }

    async UpdateWordAsync(leng,level,newWord){
        await this.db.collection(`words/${leng}/${level}`)
        .doc(newWord.id)
        .update({word : newWord.word });
    }

    async DeleteWordAsync(leng,level,deleteWord){
        console.log(deleteWord);
        await this.db.collection(`words/${leng}/${level}`)
        .doc(deleteWord.id)
        .delete();
    }

}