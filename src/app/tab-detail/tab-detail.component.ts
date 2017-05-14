import {Component, OnInit, Input} from '@angular/core';
import {TranslateService} from "../services/translate.service";
import {BaseComponent} from "../base-component";

@Component({
    selector: 'app-tab-detail',
    templateUrl: './tab-detail.component.html',
    styleUrls: ['./tab-detail.component.css']
})
export class TabDetailComponent extends BaseComponent implements OnInit {
    @Input() tab: any;

    constructor() {
        super();
    }

    ngOnInit() {
        // console.log(this.tab);
    }
}
