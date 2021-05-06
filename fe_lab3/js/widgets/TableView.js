

export class TableView extends View{
    tableView;
    constructor(id,headers){
        super();
        this.tableView=document.getElementById(id);
        let header=document.createElement('tr');
        headers.forEach(element => {
            let th = document.createElement('th');
            th.innerHTML = element;
            header.appendChild(th);
        });

        this.tableView.appendChild(header);
    }

    AddRow(columns){
        row = document.createElement('tr');
        columns.forEach(element=>{
            let td = document.createElement('td');
            td.innerHTML = element;
            row.appendChild(td);
        })
    }
}