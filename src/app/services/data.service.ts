import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {ConfigService} from "./config.service";

@Injectable()
export class DataService {

    constructor(protected http: Http,
                protected configService: ConfigService) {
    }

    httpGet(resource){
        let headers = new Headers();
        headers.append('Accept', 'application/x.erpnet.v1+json');
        let options = new RequestOptions({headers : headers});
        // this.showLoading();
        // this.connectivityMonitorService.setOnline();
        return this.http.get(this.configService.resourceUrl+'/erpnet-api/'+resource, options);
    }
}
