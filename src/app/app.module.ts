import { AddressData } from './app.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMs37XVWpijVXhWr4MyWaIGaD702AEv2g'
    })
  ],
  providers: [AddressData],
  bootstrap: [AppComponent]
})
export class AppModule { }
