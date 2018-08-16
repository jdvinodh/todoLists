import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { LoginModule } from './login/login.module';
import {AppRoutingModule} from './app.routing';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    LoginModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
