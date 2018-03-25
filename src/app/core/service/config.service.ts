import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  private _login: string;
  private _email: string;

  get login() {
    return this._login;
  }

  set login(login: string) {
    this._login = login;
  }

  get email() {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

}
