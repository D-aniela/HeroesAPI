import { Routes, RouterModule } from '@angular/router';
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';
import { AboutComponent } from './components/about/about.component';

const Rutas:Routes=[
    {path: '', component: GridCardsComponent},
    {path: 'home', component:GridCardsComponent},
    {path:'about', component: AboutComponent}
]

export const APP_ROUTES = RouterModule.forRoot(Rutas);
