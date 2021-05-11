import { ImmutableListView } from "../ImmutableListView.js";
import { View } from "../View.js";
import { ModalWindowBase } from "./ModalWindowBase.js";


export class CommandResultWindow extends ModalWindowBase{

    async ShowWindowAsync(modalWindowParams){
        super.ShowWindow();
        let htmlCode=await fetch("./views/pages/commandresult.html")
            .then(r => r.text());
        document.getElementById(this.container.idResolver.modal_window_body).replaceWith( View.htmlToElemt(htmlCode));
        console.log(modalWindowParams);

        const guessedWords = modalWindowParams.guessedWords.map(x => x.word);
        const skippedWords = modalWindowParams.skippedWords.map(x => x.word);
        const guessedListView = new ImmutableListView(guessedWords,this.container.idResolver.command_result_guessed_words);
        const skippedListView= new ImmutableListView(skippedWords,this.container.idResolver.command_result_skipped_words);

        document.getElementById(this.container.idResolver.command_name)
            .innerHTML  =modalWindowParams.commandName;
        
        document.getElementById(this.container.idResolver.command_result)
            .innerHTML = modalWindowParams.commandResult;

    }
}