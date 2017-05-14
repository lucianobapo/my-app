import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import 'rxjs/add/operator/map';
import {BaseComponent} from "../base-component";

@Component({
    selector: 'app-data-screen',
    templateUrl: './data-screen.component.html',
    styleUrls: ['./data-screen.component.css']
})
export class DataScreenComponent extends BaseComponent implements OnInit {

    public tabs = [];

    constructor(protected dataService: DataService) {
        super();
    }

    ngOnInit() {
        this.dataService.httpGet('config/erpnetSaas')
            .map(response=>{
                return response.json().data;
            })
            .subscribe(response=>{
                Object.keys(response).forEach(item=>{
                    if(response[item].hasOwnProperty('apiUrl'))
                        this.tabs.push(response[item]);
                });
            });
    }

    changeTab(key): void {
        console.log(key);
    }
}
