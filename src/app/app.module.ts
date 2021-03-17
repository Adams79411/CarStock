import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {  DuplicatePipe } from 'src/app/pipe/DuplicatePipe';
import { CarstockService } from './carstock.service';

@NgModule({
  declarations: [
    AppComponent,
    DuplicatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ DuplicatePipe, CarstockService ],
  bootstrap: [AppComponent],
  exports: [DuplicatePipe]
})
export class AppModule { }
