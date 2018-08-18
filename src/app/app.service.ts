import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
@Injectable()

export class AddressData{
  record:any;
  address:string;
  constructor(private _http:HttpClient){

    // Latitude ,,longitude

  }
  getAddress(){
    return this._http.get("https://raw.githubusercontent.com/sunnyharsh/angular2/master/address.json");
  }
}