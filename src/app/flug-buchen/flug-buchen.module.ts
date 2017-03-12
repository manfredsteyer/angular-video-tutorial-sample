import { FlugService } from './flug-suchen/flug.service';
import { FlugEditComponent } from './flug-edit/flug-edit.component';
import { FlugBuchenRoutesModule } from './flug-buchen.routes';
import { PassagierSuchenComponent } from './passagier-suchen/passagier-suchen.component';
import { FlugCardComponent } from './flug-suchen/flug-card.component';
import { FlugSuchenComponent } from './flug-suchen/flug-suchen.component';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        SharedModule,
        FlugBuchenRoutesModule
    ],
    declarations: [
        FlugSuchenComponent,
        FlugCardComponent,
        PassagierSuchenComponent,
        FlugEditComponent
    ],
    providers: [
        FlugService
    ]
})
export class FlugBuchenModule {

}