import { FlugSuchenComponent } from './flug-buchen/flug-suchen/flug-suchen.component';
import { PassagierSuchenComponent } from './flug-buchen/passagier-suchen/passagier-suchen.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
    
    

];

export const AppRoutesModule = RouterModule.forRoot(APP_ROUTES);