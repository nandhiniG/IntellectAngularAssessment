import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppComponent } from './app.component';
import { routing } from "./app.routes"

import { HttpModule } from '@angular/http';
import { UserDataComponent } from './user-data/user-data.component';
import { UserInfoComponent } from './user-info/user-info.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
