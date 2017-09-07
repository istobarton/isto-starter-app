import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RequestOptions } from 'http';
import { HttpModule } from '@angular/http';
import { CustomRequestOptions } from './options/custom-request.options';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    {
      provide: RequestOptions,
      useClass: CustomRequestOptions
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
