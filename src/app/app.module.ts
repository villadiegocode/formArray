import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from '@components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {CardModule} from "primeng/card";
import {ChipsModule} from "primeng/chips";
import {Button} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CardModule,
    ReactiveFormsModule,
    ChipsModule,
    Button,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
