import { HomeComponent } from './home/home.component';
import { AppRoutesModule } from './app.routes';
import { FlugBuchenModule } from './flug-buchen/flug-buchen.module';
import { SharedModule } from './shared/shared.module';
import { OrtPipe } from './shared/pipes/ort.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlugBuchenModule,
    AppRoutesModule
  ],
  declarations: [
    // Shell
    HomeComponent,
    AppComponent
  ],
  providers: [
    //{ provide: FlugService, useClass: FlugService }
    // FlugService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
