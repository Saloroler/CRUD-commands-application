import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TocomService } from "./services/tocom.service";
import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TocomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
