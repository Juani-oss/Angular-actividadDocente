import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Team } from './shared/team/team';
import { Hero } from './shared/hero/hero';
import { Cards } from './shared/cards/cards';
import { Nosotros } from './features/nosotros/nosotros';
import { Preguntas } from './shared/preguntas/preguntas';
import { Comentarios } from './features/comentarios/comentarios';
import { Contacto } from './shared/contacto/contacto';

export const routes: Routes = [

     //ruta inicial
    {path:'', component:Home},
    //rutas de navegacion
    {path:'contacto', component:Contacto},
    {path:'nosotros', component:Nosotros},
    {path:'comentarios', component:Comentarios},
];
