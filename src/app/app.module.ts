import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {EmployeeComponent} from './employee/employee.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import {DataService} from "./services/data.service";
import { FooterComponent } from './footer/footer.component';
import { DataScreenComponent } from './data-screen/data-screen.component';
import {ConfigService} from "./services/config.service";
import { TabDetailComponent } from './tab-detail/tab-detail.component';
import {TranslateService} from "./services/translate.service";

@NgModule({
    declarations: [
        AppComponent,
        EmployeeComponent,
        NavComponent,
        FooterComponent,
        DataScreenComponent,
        TabDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot(),
        HttpModule
    ],
    providers: [
        DataService,
        ConfigService,
        TranslateService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
