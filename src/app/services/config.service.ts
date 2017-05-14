import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  private _mandante = 'ilhanet';
  private _resourceUrl;
  private _googlePlusWebClientId;

  constructor() {
  }

  get mandante(): string {
    return this._mandante;
  }

  get resourceUrl(): string {
    // this._resourceUrl = 'https://erpnet-v5.ilhanet.com';
    this._resourceUrl = 'https://westgroup.ilhanet.com';
    return this._resourceUrl;
  }

  get googlePlusWebClientId() {
    this._googlePlusWebClientId = '4910560041-g7fqeg0ibo10eid6q4c0qn1jqnk3airq.apps.googleusercontent.com';
    return this._googlePlusWebClientId;
  }

}
