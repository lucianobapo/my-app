import {TranslateService} from "./services/translate.service";
export class BaseComponent {
    constructor() {
    }
    public t(str){
        return TranslateService.get(str);
    }
    public getConfig(key): void {
        return key;
    }
}
