import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GridCardsComponent,
    DescripcionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
