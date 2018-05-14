import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IshikawaComponent } from './ishikawa/ishikawa.component';
import { AppRoutingModule } from './app.routing.module';
import { IshikawaService } from './ishikawa/ishikawa.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    IshikawaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [IshikawaService],
  bootstrap: [AppComponent]
})
export class AppModule { }