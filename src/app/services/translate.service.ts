import {Injectable} from '@angular/core';

@Injectable()
export class TranslateService {

    constructor() {
    }

    static get(str){
        return str;
    }
}
