import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../base-component";

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent extends BaseComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
