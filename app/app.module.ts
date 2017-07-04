import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { DataService } from './services/data.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
