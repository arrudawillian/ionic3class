import { Injectable } from '@angular/core';
import { sharedStylesheetJitUrl } from '@angular/compiler';

let config_key_name = "config";

@Injectable()
export class ConfigProvider {

  private config = {
    showslide: false,
    name: "",
    username: ""
  }

  constructor() {
  }

  // Recuperar os dados do localstorage
  getConfigData(): any {
    return localStorage.getItem(config_key_name);
  }

  // Gravar os dados no localstorage
  // O ? torna opcional a gravação da variavel
  setConfigData(showslide?: boolean, name?: string, username?: string) {
    let config = {
      showslide: false,
      name: "",
      username: ""
    };

      if (showslide){
        config.showslide=showslide;
      }

      if (name){
        config.name=name;
      }

      if (username){
        config.username=username;
      }

      localStorage.setItem(config_key_name, JSON.stringify(config));

  }

}
