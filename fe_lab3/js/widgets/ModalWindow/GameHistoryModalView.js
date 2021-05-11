import { TableView } from "../TableView.js";
import { View } from "../View.js";
import { ModalWindowBase } from "./ModalWindowBase.js";



export class GameHistoryModalView extends ModalWindowBase{
    async ShowModalAsync(){
        super.ShowWindow();
        let htmlCode=await fetch("./views/pages/historypage.html")
            .then(r => r.text());

        
        document.getElementById(this.container.idResolver.modal_window_body).replaceWith( View.htmlToElemt(htmlCode));
        const tableView = new TableView(this.container.idResolver.game_history_table,['Command','Score','Date']);
        const gameHistory = JSON.parse(localStorage.getItem('gameHistory'));
        if(gameHistory != undefined)
            gameHistory.forEach(element => {
                tableView.AddRow([
                    element.winner,
                    element.points,
                    element.currentDate
                ]);
        });
    }

}