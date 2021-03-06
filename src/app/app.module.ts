import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { wordcomponent } from './header_munadi/header.component';
import { SileMunadiComponent } from './sile-munadi/sile-munadi.component';
@NgModule({
  declarations: [
    AppComponent,
    wordcomponent,
    SileMunadiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
