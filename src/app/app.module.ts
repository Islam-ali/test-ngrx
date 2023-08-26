import { NgModule, effect } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducer/counter.reducer';
import { redusers } from './store/store';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http'
import { TodoEffect } from './store/effects/todo.effect';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(redusers),
    EffectsModule.forRoot([TodoEffect]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
