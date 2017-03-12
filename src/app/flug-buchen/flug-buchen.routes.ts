import { FlugEditComponent } from './flug-edit/flug-edit.component';
import { PassagierSuchenComponent } from './passagier-suchen/passagier-suchen.component';
import { FlugSuchenComponent } from './flug-suchen/flug-suchen.component';
import { Routes, RouterModule } from '@angular/router';


const FLUG_BUCHEN_ROUTES: Routes = [

    {
        path: 'flug-suchen',
        component: FlugSuchenComponent
    },
    {
        path: 'passagier-suchen',
        component: PassagierSuchenComponent
    },
    {
        path: 'flug-edit/:id',
        component: FlugEditComponent
    }

];

export const FlugBuchenRoutesModule = RouterModule.forChild(FLUG_BUCHEN_ROUTES);