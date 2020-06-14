import { Routes, RouterModule } from '@angular/router';
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';
import { AboutComponent } from './components/about/about.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { SearchHeroComponent } from './components/search-hero/search-hero.component';

const Rutas:Routes=[
    {path: '', component: GridCardsComponent},
    {path: 'home', component:GridCardsComponent},
    {path:'about', component: AboutComponent},
    {path:'search', component: SearchHeroComponent},
    {path: 'descripcion/:id', component: DescripcionComponent}
]

export const APP_ROUTES = RouterModule.forRoot(Rutas);
