import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { APP_ROUTES } from './app.routes';
import { AboutComponent } from './components/about/about.component';
import { SearchHeroComponent } from './components/search-hero/search-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GridCardsComponent,
    DescripcionComponent,
    NavbarComponent,
    AboutComponent,
    SearchHeroComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
