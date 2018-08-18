import { Component } from '@angular/core';
import { AddressData } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title: string = 'My first AGM project';
  lat: any;
  lng:any;
  add:any;

  features=[{"Latitude":"286987222","longitude":"774302578"},
  {"Latitude":"286984000","longitude":"774300889"},{"Latitude":"286990111","longitude":"774303733"},{"Latitude":"286996667","longitude":"774310578"},{"Latitude":"286999178","longitude":"774310844"},{"Latitude":"287001467","longitude":"774311733"},{"Latitude":"287002133","longitude":"774313422"}
  ]


  constructor(private _address:AddressData){}

  addressChange(){
    // this._address.getAddress().subscribe(res=>{
    //   this.add=res.features;
    //   this.lat=286987222;
    //   this.lng=774302578;
    //   console.log("res is " , this.add);
    // })
    // console.log("hello", this.features);
    for(let i=0; i<this.features.length; i++){
      setTimeout(()=>{
        for(let i=0; i<this.features.length; i++){
        this.lat=this.features[i];
        this.lng=this.features[i];
        console.log("hello " ,this.features[i])
      },8000);
    }
  }
}
